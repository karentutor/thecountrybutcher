'use client'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

import Loader from '@/components/Loader'
import Error from '@/components/Error'
import StatisticCard from '../components/StatisticCard'
import { messagesHead } from '@/data'

const Home = () => {
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/api/products'),
  })

  const messagesQuery = useQuery({
    queryKey: ['messages'],
    queryFn: () => axios.get('/api/messages'),
  })

  if (productsQuery.isLoading) return <Loader />

  if (productsQuery.isError) return <Error />

  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold my-4'>Home</h1>
      <div className='w-full text-[#45454E] py-2'>
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
        {/* Last Recieved Messages */}
        <div className='flex flex-col gap-2 py-14'>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-800'>
            Last Messages
          </h3>
          <div className='overflow-y-auto no-scrollbar py-6'>
            {messagesQuery.isLoading ? (
              <Loader />
            ) : (
              <table className='table-auto w-[1000px] lg:w-full bg-primary-900 rounded-xl overflow-hidden'>
                <thead>
                  <tr className='border-b text-white'>
                    {messagesHead
                      .slice(0, messagesHead.length)
                      .map((item, i) => (
                        <th className='p-4 text-center font-normal' key={i}>
                          {item}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {messagesQuery.data?.data
                    ?.sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((msg, i) => (
                      <tr
                        className='text-center even:bg-white odd:bg-gray-100'
                        key={msg._id}
                      >
                        <td className='py-3'>{i + 1}</td>
                        <td>{msg.firstName}</td>
                        <td>{msg.lastName}</td>
                        <td>{msg.email}</td>
                        <td>{msg.phone}</td>
                        <td>
                          {msg.message.length > 100
                            ? `${msg.message.slice(0, 100)}...`
                            : msg.message}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
