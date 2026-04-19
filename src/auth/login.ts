export interface LoginInput {
  email: string
  password: string
}

export interface LoginResult {
  ok: boolean
  error?: string
}

export function login(input: LoginInput): LoginResult {
  if (!input.email || !input.password) {
    return { ok: false, error: 'Missing credentials' }
  }
  return { ok: true }
}
