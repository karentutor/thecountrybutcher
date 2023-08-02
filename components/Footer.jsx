import { navLinks, socialLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaMailBulk, FaMap, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col text-white md:flex-row md:justify-around md:item-start py-12'>
        <Link
          href='/'
          className='flex flex-col gap-2 justify-center items-center p-5'
        >
          <Image
            width={150}
            height={150}
            src='/logo.png'
            alt='logo'
            className='object-contain rounded-full'
          />
          <h5 className='font-cormorant font-bold text-center text-3xl'>
            The Country Butcher
          </h5>
        </Link>
        <div>
          <ul className='flex flex-col items-center justify-center md:items-start gap-4 my-6'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.route}
                  key={link.id}
                  className='text-gray-300 hover:text-white text-lg md:text-xl transition'
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href='/admin/home'
                className='text-primary-800 hover:text-primary-900 text-lg md:text-xl transition'
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div
          className='flex flex-col items-center justify-center md:items-start max-w-[200px] md:max-w-2xl md:mx-0 mx-auto gap-4 my-6 text-gray-300'
          dir='ltr'
        >
          <a
            href='https://www.google.com/maps?ll=36.776807,-76.091684&z=15&t=m&hl=en&gl=EG&mapclient=embed&q=3640+Dam+Neck+Rd+%23216+Virginia+Beach,+VA+23453+USA'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-white text-center'
          >
            <FaMap className='text-xl hidden md:inline-block' />
            3640 Dam Neck Rd #216, Virginia Beach, VA 23453, USA
          </a>
          <a
            href='mailto:countrybutchershopanddeli@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-white'
          >
            <FaMailBulk className='text-xl' />
            countrybutchershopanddeli@gmail.com
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=+17574681583&text=Hello,%20more%20information!'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-white'
          >
            <FaWhatsapp className='text-xl' />
            +1 757-468-1583
          </a>
          <div className='flex justify-between gap-6 md:gap-10 max-w-[275px] md:max-w-[375px] mt-4'>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                title={link.text}
                target='_blank'
                rel='noreferrer'
                className='text-gray-300 hover:text-white transition w-[30px] h-[30px] rounded-full flex justify-center items-center'
              >
                <link.icon className='hover:text-white text-3xl' />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className='border-t-2 text-sm border-[#D9D9D91C] text-center pt-4 text-white'>
        All Rights Reserved &copy;{' '}
        <span className='text-gold-900'>The Country Butcher</span>{' '}
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer
