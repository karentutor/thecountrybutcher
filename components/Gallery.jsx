import { gallery, socialLinks } from '@/data'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='max-w-7xl mx-auto w-full py-10 px-5'>
      <div className='bg-white flex flex-col gap-10 p-6 md:p-10'>
        {/* Social Media */}
        <div className='flex items-center flex-wrap justify-center gap-8'>
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.id}
              className='text-3xl flex items-center gap-2'
            >
              <link.icon />
              <span className='text-sm text-primary-800 hover:text-primary-900 transition'>
                {link.text}
              </span>
            </a>
          ))}
        </div>
        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {gallery.map((img) => (
            <a
              href='https://www.facebook.com/whosyourbutcher/'
              target='_blank'
              rel='noreferrer'
              key={img}
              className='overflow-hidden'
            >
              <Image
                width={0}
                height={0}
                sizes='100vw'
                src={img}
                alt={img}
                className='w-full hover:scale-105 transition-all'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
