'use client'

import { redirect } from 'next/navigation'

import useAuth from '@/hooks/useAuth'
import Sidebar from './components/Sidebar'

const AdminLayout = ({ children }) => {
  const { auth } = useAuth()

  if (!auth?.email) {
    redirect('/login')
  }
  return (
    <div className='w-full flex h-screen overflow-hidden bg-gray-200'>
      <Sidebar />
      <div className='w-full grid grid-rows-[auto_1fr_auto] m-2'>
        <div className='bg-primary-900 h-14 w-full rounded-lg'></div>
        <div className='flex-1 overflow-auto px-4'>{children}</div>
        <div className='bg-secondary h-6 w-full rounded-md'></div>
      </div>
    </div>
  )
}

export default AdminLayout
