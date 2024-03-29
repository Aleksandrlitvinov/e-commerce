export const PriceWithDiscount = (price: number, discount: number): number => {
  return price - (discount * price) / 100
}
