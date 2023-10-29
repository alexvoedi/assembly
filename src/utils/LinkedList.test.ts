import { describe, expect, it } from 'vitest'
import { LinkedList } from './LinkedList'

describe('linkedList', () => {
  describe('constructor', () => {
    it('should be initialized with no head and no tail', () => {
      const list = new LinkedList()

      expect(list.getHead()).toBe(null)
      expect(list.getHead()).toBe(null)
    })
  })

  describe('push', () => {
    it('should push a node to the list', () => {
      const list = new LinkedList<number>()

      list.push(1)

      expect(list.getHead()?.value).toBe(1)
      expect(list.getTail()?.value).toBe(1)

      list.push(2)

      expect(list.getHead()?.value).toBe(1)
      expect(list.getTail()?.value).toBe(2)

      list.push(3)

      expect(list.getHead()?.value).toBe(1)
      expect(list.getTail()?.value).toBe(3)
    })
  })

  describe('insertBeforeByCondition', () => {
    const getCondition = (current: number) => (next: number) => current <= next

    it('should insert into an empty list', () => {
      const list = new LinkedList<number>()

      list.insertBeforeByCondition(1, getCondition(1))

      expect(list.toArray()).toEqual([1])
    })

    it('should insert at the tail if the condition never met', () => {
      const list = new LinkedList<number>()

      list.insertBeforeByCondition(1, getCondition(1))
      list.insertBeforeByCondition(2, getCondition(2))

      expect(list.toArray()).toEqual([1, 2])
    })

    it('should insert at the head if the condition always met', () => {
      const list = new LinkedList<number>()

      list.insertBeforeByCondition(1, getCondition(1))
      list.insertBeforeByCondition(2, getCondition(2))
      list.insertBeforeByCondition(0, getCondition(0))

      expect(list.toArray()).toEqual([0, 1, 2])
    })

    it('should insert in the middle if the condition sometimes met', () => {
      const list = new LinkedList<number>()

      list.insertBeforeByCondition(1, getCondition(1))
      list.insertBeforeByCondition(2, getCondition(2))
      list.insertBeforeByCondition(0, getCondition(0))
      list.insertBeforeByCondition(1.5, getCondition(1.5))
      list.insertBeforeByCondition(3.14, getCondition(3.14))
      list.insertBeforeByCondition(-1, getCondition(-1))
      list.insertBeforeByCondition(100, getCondition(100))

      expect(list.toArray()).toEqual([
        -1,
        0,
        1,
        1.5,
        2,
        3.14,
        100,
      ])
    })
  })

  describe('toArray', () => {
    it('should return an empty array for an empty list', () => {
      const list = new LinkedList<number>()

      expect(list.toArray()).toEqual([])
    })

    it('should return an array with the values of the list', () => {
      const list = new LinkedList<number>()

      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.toArray()).toEqual([1, 2, 3])
    })
  })

  describe('getHead', () => {
    it('should return null for an empty list', () => {
      const list = new LinkedList<number>()

      expect(list.getHead()).toBe(null)
    })

    it('should return the head of the list', () => {
      const list = new LinkedList<number>()

      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.getHead()?.value).toBe(1)
    })
  })

  describe('getTail', () => {
    it('should return null for an empty list', () => {
      const list = new LinkedList<number>()

      expect(list.getTail()).toBe(null)
    })

    it('should return the tail of the list', () => {
      const list = new LinkedList<number>()

      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.getTail()?.value).toBe(3)
    })
  })
})
