import { featured } from '@/data'
import Image from 'next/image'

const Featured = () => {
  return (
    <section className='flex flex-col lg:flex-row h-screen lg:h-auto'>
      {featured.map((item) => (
        <div className='flex-1 w-full h-52 lg:h-[600px] relative' key={item.id}>
          <div className='absolute overflow-hidden inset-0 w-full h-full flex items-center justify-center text-center z-10 group'>
            <Image
              width={0}
              height={0}
              sizes='100vw'
              src={item.img}
              alt={item.title}
              className='absolute lg:inset-0 w-full object-cover group-hover:scale-105 transition-all h-full'
            />
            <h3 className='text-white font-bold text-2xl lg:text-3xl absolute inset-0 w-full lg:h-full flex items-center justify-center text-center bg-black/30'>
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Featured
