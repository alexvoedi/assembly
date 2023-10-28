import type { BlueprintId } from '../data/blueprints/BlueprintId'

export enum EventTypeId {
  ProduceItem = 'produce-item',
}

export interface ScheduledEvent {
  repeat: boolean
  data: EventData
}

export interface TimedEvent extends ScheduledEvent {
  id: string
  start: number
  timerId?: number
}

export interface ProduceBlueprintEventData {
  type: EventTypeId.ProduceItem
  blueprintId: BlueprintId
}

export type EventData = ProduceBlueprintEventData
