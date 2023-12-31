import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import type { ItemId } from '../data/items/ItemId'
import { isPositive, isQuantity } from '../functions/Quantity'
import type { ItemWithQuantity } from '@/interfaces/Item'

export type InventoryStore = RemovableRef<{
  money: number
  items: InventoryItems
  maxItems: number
}>

type InventoryItems = Partial<Record<ItemId, {
  quantity: number
  totalQuantity: number
}>>

export const useInventoryStore = defineStore('inventory-store', {
  state: (): InventoryStore => useLocalStorage('inventory-store', {
    money: 0,
    items: {},
    maxItems: 10_000,
  }),

  actions: {
    getItem(itemId: ItemId) {
      const inventoryItem = this.items[itemId]

      if (!inventoryItem)
        throw new Error(`Tried to get ${itemId} but it doesn't exist in the inventory.`)

      return inventoryItem
    },

    hasItem(itemId: ItemId) {
      const inventoryItem = this.items[itemId]

      return !!inventoryItem
    },

    hasItems(itemIds: ItemId[]) {
      return itemIds.every(itemId => this.hasItem(itemId))
    },

    hasQuantityOfItem(itemId: ItemId, quantity: number) {
      if (!isQuantity(quantity))
        throw new Error(`Tried to check if has quantity of ${itemId} but ${quantity} is not a quantity.`)

      if (!this.hasItem(itemId))
        return false

      const inventoryItem = this.getItem(itemId)

      return inventoryItem.quantity >= quantity
    },

    hasQuantityOfItems(items: ItemWithQuantity[]) {
      return items.every(item => this.hasQuantityOfItem(item.id, item.quantity))
    },

    hasEnoughMoney(amount: number) {
      return this.money >= amount
    },

    addItem(itemId: ItemId, quantity: number) {
      if (!isQuantity(quantity))
        throw new Error(`Tried to add ${quantity} of ${itemId} but ${quantity} is not a quantity.`)

      let inventoryItem = this.items[itemId]

      if (!inventoryItem) {
        inventoryItem = {
          quantity: 0,
          totalQuantity: 0,
        }

        this.items[itemId] = inventoryItem
      }

      const newQuantity = inventoryItem.quantity + quantity

      if (newQuantity > this.maxItems)
        throw new Error(`Tried to add ${quantity} of ${itemId} but the inventory is full.`)

      inventoryItem.quantity = newQuantity

      inventoryItem.totalQuantity += quantity
    },

    addMoney(amount: number) {
      if (!isPositive(amount))
        throw new Error(`Tried to add ${amount} but it's not a positive number.`)

      this.money += amount
    },

    removeMoney(amount: number) {
      const hasEnoughMoney = this.hasEnoughMoney(amount)

      if (!hasEnoughMoney)
        throw new Error(`Tried to remove ${amount} but only has ${this.money} money.`)

      this.money -= amount
    },

    removeItem(itemId: ItemId, quantity: number) {
      if (!isQuantity(quantity))
        throw new Error(`Tried to remove ${quantity} of ${itemId} but ${quantity} is not a quantity.`)

      const inventoryItem = this.getItem(itemId)

      const hasQuantityOfItem = this.hasQuantityOfItem(itemId, quantity)

      if (!hasQuantityOfItem)
        throw new Error(`Tried to remove ${quantity} of ${itemId} but only has ${inventoryItem.quantity}.`)

      inventoryItem.quantity -= quantity
    },

    removeItems(items: ItemWithQuantity[]) {
      items.forEach(item => this.removeItem(item.id, item.quantity))
    },

    resetStore() {
      this.money = 0
      this.items = {}
      this.maxItems = 10_000
    },

    getTotalItems() {
      return Object.values(this.items).reduce((total, item) => total + item.quantity, 0)
    },

    isFull() {
      return this.getTotalItems() >= this.maxItems
    },

    getItemsArray() {
      return Object.entries(this.items).map(([itemId, item]) => ({
        ...item,
        id: itemId as ItemId,
      }))
    },

    getFilledPercentage() {
      return this.getTotalItems() / this.maxItems
    },

    setMoney(value: number) {
      if (!isPositive(value))
        throw new Error(`Tried to set ${value} as money but it's not a positive number.`)

      this.money = value
    },
  },
})
