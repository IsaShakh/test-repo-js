export function CheckoutSummary({ total }: { total: number }) {
  return (
    <div className="checkout-summary">
      <span>Total: $</span>
      <span>{total.toFixed(2)}</span>
    </div>
  )
}
