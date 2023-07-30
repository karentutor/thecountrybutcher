'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'

const Hero = ({ slides, title, title2, subtitle, btnText, btnUrl = '/' }) => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={true}
        className='relative w-full h-screen bg-black/60'
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide}>
            <Image
              src={slide}
              alt={`slide ${i}`}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full z-10 h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute inset-0 z-10 bg-black/30'>
        <div className='flex flex-col items-center text-center justify-center gap-2 md:gap-10 tracking-widest h-full text-white max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-6xl xl:text-8xl font-bold uppercase leading-normal md:leading-[4rem] lg:!leading-[6.5rem]'>
            {title}
          </h1>
          <h2 className='text-2xl md:text-4xl font-bold uppercase'>{title2}</h2>
          <p className='uppercase text-base md:text-lg text-gray-300'>
            {subtitle}
          </p>
          <Link
            href={btnUrl}
            className='uppercase tracking-widest px-10 py-4 text-lg md:text-xl lg:text-2xl mt-8 bg-primary-800 hover:bg-primary-900 transition w-fit text-white'
          >
            {btnText}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
