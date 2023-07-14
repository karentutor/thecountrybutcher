'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { BsQuote } from 'react-icons/bs'
import { testimonials } from '@/data'

import 'swiper/css'

const Testimonials = () => {
  return (
    <div className='py-10 md:py-20 max-w-7xl mx-auto text-white'>
      <Swiper loop={true} modules={[Autoplay]} autoplay={true}>
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='grid grid-cols-1 lg:grid-cols-4 max-w-6xl px-6 pb-12 mx-auto gap-10'>
              <div className='flex flex-col col-span-3'>
                <p className='text-xl md:text-2xl font-medium mt-10 border-solid  border-l-4 border-accent-900 pl-[12px] text-secondary-900'>
                  {item.quote}
                </p>
                <h2 className='text-lg tracking-widest font-bold font-cormorant pl-[12px] mt-[10px] text-primary-900'>
                  {item.author}
                </h2>
              </div>
              <BsQuote className='text-[170px] text-white hidden lg:block text-accent-900 rotate-180' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
