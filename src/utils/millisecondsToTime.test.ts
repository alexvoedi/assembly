import { describe, expect, it } from 'vitest'
import { millisecondsToTime } from './millisecondsToTime'

describe('millisecondsToTime', () => {
  it('should throw if the duration is negative', () => {
    expect(() => millisecondsToTime(-1)).toThrow()
  })

  it('should convert milliseconds to a human readable time', () => {
    expect(millisecondsToTime(0)).toBe('0ms')
    expect(millisecondsToTime(1)).toBe('1ms')
    expect(millisecondsToTime(1234)).toBe('1s 234ms')
    expect(millisecondsToTime(123456)).toBe('2m 3s 456ms')
    expect(millisecondsToTime(12345678)).toBe('3h 25m 45s 678ms')
    expect(millisecondsToTime(123456789)).toBe('1d 10h 17m 36s 789ms')
  })
})
