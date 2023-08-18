'use client'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { specialSlides } from '@/data'
import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Loader from '@/components/Loader'
import Featured from './components/Featured'
import SpecialCard from './components/SpecialCard'

const Specials = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => axios.get('/api/products'),
  })

  const specials = data?.data?.filter((pro) => pro.special)

  return (
    <div>
      <Hero
        title="“IF IT'S NOT RAISED RIGHT IT CAN'T BE DELICIOUS.”"
        title2='NO HORMONES - NO ANTIBIOTICS - PASTURE-RAISED'
        slides={specialSlides}
        btnText='Start shopping'
        btnUrl='/product-list'
      />
      <Banner
        title='NOW DELIVERING MEAT THE WAY MEAT SHOULD BE'
        description='By sourcing from pastures in Vancouver Island and Triple A Alberta Beef and dry aging and hand-cutting it at our own facilities, we’re setting a new standard for meat. Once you taste the difference, you’ll never go back.'
      />
      <Featured />
      {/* DIG IN */}
      <div className='bg-white px-5 py-10 lg:py-14'>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-10'>
          <div className='flex-1 flex flex-col gap-4 lg:mb-20'>
            <h2 className='uppercase text-7xl lg:text-8xl font-extrabold text-primary-900'>
              Let's
            </h2>
            <h2 className='uppercase text-7xl lg:text-8xl font-extrabold text-primary-900 ml-16 lg:ml-32'>
              dig in
            </h2>
          </div>
          <div className='flex-1 flex flex-col gap-8 lg:mt-20'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Cooking for two or ten? Firing up the grill or the skillet? How
              you’re cooking matters, and we want to help you get it right every
              time. By practicing whole-animal butchery, we’re able to offer
              tons of incredible cuts and can guide you toward the perfect one
              for any occasion.
            </p>
          </div>
        </div>
      </div>
      {/* SPECIAL PRODUCTS */}
      <div className='bg-gray-200 px-5 py-12 md:py-16'>
        <div className='max-w-6xl mx-auto space-y-16'>
          <div className='flex flex-col gap-6'>
            <h1 className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-secondary'>
              special products
            </h1>
            <p className='text-lg text-primary-900/70'>
              FROM CHICKEN TO BEEF, NOSE-TO-TAIL, THERE’S SO MUCH MEAT TO LOVE.
            </p>
          </div>
          {/* Products */}
          {isLoading ? (
            <Loader fullPage={false} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12'>
              {specials?.map((product) => (
                <SpecialCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Specials
