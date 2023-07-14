'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navLinks } from '@/data'

const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false)
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)

  const pathname = usePathname()

  const changeBg = () => setIsHeaderScrolled(window.scrollY > 50)

  // Change Background onscroll
  useEffect(() => {
    window.addEventListener('scroll', changeBg)
    return () => window.removeEventListener('scroll', changeBg)
  }, [])

  return (
    <header
      className={`absolute z-20 w-full text-white transition-all ${
        isHeaderScrolled
          ? 'bg-black/80 shadow-[0_2px_12px_-10px_rgba(0,0,0,0.3)]'
          : 'bg-black/50'
      }`}
    >
      <div className='flex items-center justify-between px-4 py-2 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between w-full'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              className='w-20 h-auto'
            />
            <h2 className='font-cormorant font-bold text-2xl md:text-3xl'>
              The Country Butcher
            </h2>
          </Link>
          <nav
            className={`flex items-center font-semibold text-2xl tracking-widest justify-center md:gap-10 gap-4 md:flex-row flex-col absolute inset-x-0 md:static bg-secondary md:bg-transparent mx-4 transition-all duration-500 rounded-lg p-4 shadow-lg md:shadow-none ${
              menuOn ? 'top-24' : 'top-[-100vh]'
            }`}
          >
            {navLinks.map((lnk) => {
              const isActive = pathname === lnk.route
              return (
                <Link
                  href={lnk.route}
                  key={lnk.id}
                  onClick={() => setMenuOn(false)}
                  className={`hover:text-white text-gray-200 text-lg transition font-semibold ${
                    isActive ? 'text-primary-900' : ''
                  } ${
                    menuOn
                      ? 'hover:bg-primary-100 w-full text-center py-2 rounded-lg'
                      : ''
                  }`}
                >
                  {lnk.text}
                </Link>
              )
            })}
          </nav>
        </div>
        <button
          className='md:hidden block font-bold text-3xl text-primary-900'
          onClick={() => setMenuOn(!menuOn)}
        >
          {menuOn ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
