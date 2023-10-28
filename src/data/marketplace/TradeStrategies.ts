import type { TradeStrategy } from '../../interfaces/TradeStrategy'
import { TradeIntent } from './TradeIntent'
import { TradeStrategyId } from './TradeStrategyId'

export const TradeStrategies: Record<TradeStrategyId, TradeStrategy> = {
  [TradeStrategyId.SellUntil]: {
    id: TradeStrategyId.SellUntil,
    name: 'Sell Until',
    description: 'Sell item until there are a certain amount of items left.',
    intent: TradeIntent.Sell,
  },
  [TradeStrategyId.SellAll]: {
    id: TradeStrategyId.SellAll,
    name: 'Sell All',
    description: 'Sell all of the item.',
    intent: TradeIntent.Sell,
  },
}
