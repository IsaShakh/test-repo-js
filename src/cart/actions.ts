export interface CartItem {
  productId: string
  quantity: number
}

export function addToCart(
  cart: CartItem[],
  productId: string,
  quantity: number,
): CartItem[] {
  const existing = cart.find((item) => item.productId === productId)
  if (existing) {
    existing.quantity += quantity
    return cart
  }
  return [...cart, { productId, quantity }]
}
