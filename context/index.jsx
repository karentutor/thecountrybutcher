'use client'

import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    getCookie('user') ? JSON.parse(getCookie('user')) : {}
  )

  const queryClient = new QueryClient()

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Toaster />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  )
}
