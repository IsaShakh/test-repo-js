import type { Order } from '../types/Order'

export function OrderList({ orders }: { orders: Order[] }) {
  return (
    <ul className="order-list">
      {orders.map((order) => (
        <li key={order.id}>
          {order.id} — {order.total} ({order.status})
        </li>
      ))}
    </ul>
  )
}
