import { useState } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { SignupForm } from './components/SignupForm'
import { Sidebar } from './components/Sidebar'
import { UserCard } from './components/UserCard'
import { OrderList } from './components/OrderList'
import { CheckoutSummary } from './components/CheckoutSummary'
import { login } from './auth/login'
import { validateEmail } from './auth/validate'
import { addToCart } from './cart/actions'
import { formatPrice } from './utils/formatPrice'
import { fetchUser } from './api/users'
import { fetchOrders } from './api/orders'
import { API_BASE_URL, APP_NAME } from './config'
import { MAX_UPLOAD_MB, ALLOWED_TYPES } from './upload/config'
import type { User } from './types/User'
import type { Order } from './types/Order'
import './App.css'

const demoUser: User = {
  id: 'u-1',
  fullName: 'Jane Doe',
  email: 'jane@example.com',
}

const demoOrders: Order[] = [
  { id: 'o-1', total: 42, status: 'paid' },
  { id: 'o-2', total: 18, status: 'pending' },
]

function App() {
  const [count, setCount] = useState(0)

  const validEmail = validateEmail(demoUser.email)
  const loginResult = login({ email: demoUser.email, password: 'secret123' })
  const cart = addToCart([], 'p-1', 1)
  const price = formatPrice(9.99)

  void fetchUser
  void fetchOrders

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <SignupForm />
        <Form />
        <UserCard user={demoUser} />
        <OrderList orders={demoOrders} />
        <CheckoutSummary total={42} />
      </main>
      <footer>
        <p>{APP_NAME}</p>
        <p>API: {API_BASE_URL}</p>
        <p>Max upload: {MAX_UPLOAD_MB} MB ({ALLOWED_TYPES.join(', ')})</p>
        <p>Email valid: {String(validEmail)}</p>
        <p>Login ok: {String(loginResult.ok)}</p>
        <p>Cart items: {cart.length}</p>
        <p>Demo price: {price}</p>
        <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      </footer>
    </>
  )
}

export default App
