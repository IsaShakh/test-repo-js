import type { User } from '../types/User'

export async function fetchUser(id: string): Promise<User> {
  return { id, fullName: 'Jane Doe', email: 'jane@example.com' }
}
