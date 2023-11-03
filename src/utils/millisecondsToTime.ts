export function millisecondsToTime(duration: number) {
  if (duration === 0)
    return '0ms'

  if (duration < 0)
    throw new Error('millisecondsToTime: duration must be a positive number')

  const milliseonds = duration % 1000
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  const days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365)

  const millisecondsText = `${milliseonds}ms`
  const secondsText = `${seconds}s`
  const minutesText = `${minutes}m`
  const hoursText = `${hours}h`
  const daysText = `${days}d`

  const result = [daysText, hoursText, minutesText, secondsText, millisecondsText]
    .filter(text => text[0] !== '0')
    .join(' ')

  return result
}
