import type { User } from '../types/User'

export function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <span>{user.fullName}</span>
      <span>{user.email}</span>
    </div>
  )
}
