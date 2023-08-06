'use client'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

import Loader from '@/components/Loader'
import Error from '@/components/Error'
import StatisticCard from '../components/StatisticCard'

const Home = () => {
  const getProducts = () => axios.get('/api/products')

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  if (productsQuery.isLoading) return <Loader />

  if (productsQuery.isError) return <Error />

  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold my-4'>Home</h1>
      <div className='w-full text-[#45454E] p-2'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 w-full text-[#7f7f86]'>
          <StatisticCard
            icon={
              <FaShoppingCart className='p-1.5 text-6xl text-white rounded-lg bg-primary-900' />
            }
            number={productsQuery.data?.data?.length}
            title='Num. of Products'
          />
          <StatisticCard
            icon={
              <FaStar className=' p-1.5 text-6xl text-white rounded-lg bg-primary-900' />
            }
            number={productsQuery.data?.data?.filter((p) => p.special)?.length}
            title='Num. of Specials'
          />
        </div>
      </div>
    </>
  )
}

export default Home
