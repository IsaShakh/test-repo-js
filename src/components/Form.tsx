import { useState } from 'react'

export function Form() {
  const [value, setValue] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  )
}
