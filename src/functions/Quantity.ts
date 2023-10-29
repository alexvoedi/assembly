export function isQuantity(quantity: number) {
  return isInteger(quantity) && isPositive(quantity)
}

export function isPositive(quantity: number) {
  return quantity >= 0
}

export function isInteger(quantity: number) {
  return Number.isInteger(quantity)
}
