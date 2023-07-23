'use client'

import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  )

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Toaster />
      {children}
    </AuthContext.Provider>
  )
}
