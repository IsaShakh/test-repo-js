import type { Order } from '../types/Order'

export async function fetchOrders(): Promise<Order[]> {
  return [
    { id: 'o-1', total: 42, status: 'paid' },
    { id: 'o-2', total: 18, status: 'pending' },
  ]
}
