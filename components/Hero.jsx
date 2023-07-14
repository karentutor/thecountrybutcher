'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import { slides } from '../data'

import 'swiper/css'

const Hero = () => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={true}
        className='relative w-full h-screen bg-black/60'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <Image
              src={slide}
              alt={`slide ${slide.id}`}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full z-10 h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute inset-0 z-10 bg-black/50'>
        <div className='flex flex-col items-center text-center justify-center gap-16 md:gap-24 tracking-widest h-full text-white max-w-6xl mx-auto px-5'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal md:leading-[4rem] lg:!leading-[5rem]'>
            CHECK OUT OUR ONLINE STORE FOR EASY ORDERING. MANY NEW PRODUCTS
            ADDED!
          </h1>
          <button className='uppercase px-10 py-4 text-2xl bg-primary-800 hover:bg-primary-900 transition w-fit text-white'>
            order now
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
