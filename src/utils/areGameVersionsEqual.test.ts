import { describe, expect, it } from 'vitest'
import { areGameVersionsEqual } from './areGameVersionsEqual'

describe('areGameVersionsEqual', () => {
  it('should throw if input has invalid format', () => {
    expect(() => areGameVersionsEqual('1.2', '1.2.3')).toThrow()
    expect(() => areGameVersionsEqual('1.2.3', '1.2')).toThrow()
  })

  it('should return true if major and minor versions are equal', () => {
    expect(areGameVersionsEqual('1.2.3', '1.2.4')).toBe(true)
    expect(areGameVersionsEqual('1.2.4', '1.2.3')).toBe(true)
  })

  it('should return false if major or minor versions are not equal', () => {
    expect(areGameVersionsEqual('1.2.3', '1.3.3')).toBe(false)
    expect(areGameVersionsEqual('1.3.3', '1.2.3')).toBe(false)
    expect(areGameVersionsEqual('1.2.3', '2.2.3')).toBe(false)
    expect(areGameVersionsEqual('2.2.3', '1.2.3')).toBe(false)
  })
})
