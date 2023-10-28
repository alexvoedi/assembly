export function isQuantityOrThrow(quantity: number) {
  isIntegerOrThrow(quantity)
  isPositiveNumberOrThrow(quantity)
}

export function isPositiveNumberOrThrow(quantity: number) {
  if (quantity < 0)
    throw new Error(`Quantity is not positive.`)
}

export function isIntegerOrThrow(quantity: number) {
  if (!Number.isInteger(quantity))
    throw new Error(`Quantity is not an integer.`)
}
