'use client'

import { FaSignOutAlt } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { sidebarLinks } from '@/data'
import useAuth from '@/hooks/useAuth'

const Sidebar = () => {
  const pathname = usePathname()
  const { setAuth } = useAuth()

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    setAuth({})
  }

  return (
    <div className='bg-white shadow-lg m-2 w-16 lg:w-[300px] flex flex-col py-4 gap-20 items-center rounded-lg '>
      <Link href='/admin'>
        <Image
          src='/logo.png'
          alt='logo'
          width={150}
          height={150}
          className='px-3 md:px-2 block'
        />
      </Link>
      <ul className='flex flex-col justify-center items-center gap-4 px-2 text-white w-full'>
        {sidebarLinks?.map((link) => {
          const isActive = pathname.startsWith(link.route)
          return (
            <Link
              href={link.route}
              className={`flex items-center justify-center lg:justify-start ${
                isActive
                  ? 'bg-primary-900 text-white'
                  : 'bg-gray-200 text-primary-900'
              }  lg:px-8 py-2 rounded-full
						w-full text-right relative`}
              key={link.id}
            >
              <li className='flex items-center gap-5'>
                <link.icon className='text-xl' />
                <span className='hidden lg:block'>{link.name}</span>
              </li>
            </Link>
          )
        })}
      </ul>
      <button
        className='text-white flex items-center gap-3 mt-auto bg-secondary py-2 px-2 lg:px-4 rounded-xl'
        onClick={logout}
      >
        <span className='hidden lg:block uppercase'>Logout</span>
        <FaSignOutAlt className='text-xl' />
      </button>
    </div>
  )
}

export default Sidebar
