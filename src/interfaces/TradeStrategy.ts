import type { ItemId } from '../data/items/ItemId'
import type { TradeIntent } from '../data/marketplace/TradeIntent'
import type { TradeStrategyId } from '../data/marketplace/TradeStrategyId'

export interface TradeStrategy {
  id: TradeStrategyId
  intent: TradeIntent
  name: string
  description: string
}

interface BaseTradeStrategyData {
  itemId: ItemId
  strategyId: TradeStrategyId
}

export interface SellUntilTradeStrategyData extends BaseTradeStrategyData {
  strategyId: TradeStrategyId.SellUntil
  quantity: number
}

export interface SellAllTradeStrategyData extends BaseTradeStrategyData {
  strategyId: TradeStrategyId.SellAll
}

export type TradeStrategyData = SellUntilTradeStrategyData | SellAllTradeStrategyData
