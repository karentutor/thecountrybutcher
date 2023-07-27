'use client'

import Loader from '@/components/Loader'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { BsX } from 'react-icons/bs'
import moment from 'moment'
import { toast } from 'react-hot-toast'

const Specials = () => {
  const [detailsOn, setDetailsOn] = useState(false)
  const [special, setSpecial] = useState({})

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ['deleteSpecial'],
    mutationFn: (data) => axios.patch(`/api/products/${data.id}`, data),
    onMutate: async (sp) => {
      await queryClient.cancelQueries({ queryKey: ['specials'] })

      const previousSpecial = queryClient.getQueryData(['specials'])

      queryClient.setQueryData(['specials'], sp)

      return { previousSpecial, sp }
    },
    onSuccess: () =>
      toast.success('Product Removed from Specials Successfully'),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['specials'] }),
  })

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['specials'],
    queryFn: () => axios.get('/api/specials'),
  })

  const deleteSpecial = (product) => {
    mutation.mutate({ ...product, special: false })
  }

  const openDetails = (product) => {
    setSpecial(product)
    setDetailsOn(true)
  }

  const closeDetails = () => setDetailsOn(false)

  const handleClose = (e) => {
    if (e.target.id === 'container') {
      closeDetails()
    }
  }

  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold my-4'>Specials</h1>
      {isLoading || mutation.isLoading ? (
        <Loader />
      ) : (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 py-6'>
          {data?.data?.length === 0 && isSuccess ? (
            <div className='col-span-1 md:col-span-2 xl:col-span-3 text-3xl font-bold'>
              No Specials Found
            </div>
          ) : (
            data?.data?.map((product) => (
              <div
                key={product.id}
                className='max-w-[280px] md:max-w-xs border bg-white border-gray-200 min-w-[280px] md:min-w-[320px] hover:shadow-lg transition duration-150 ease-in-out rounded-lg border-solid max-h-[420px]'
              >
                <div className='rounded-tl-lg relative rounded-tr-lg overflow-hidden h-[250px]'>
                  <Image
                    src={product?.imageUrl}
                    alt={product?.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-full object-cover'
                  />
                  <span className='border absolute top-4 right-2 border-gray-400 rounded-full bg-white px-4 py-1 text-sm'>
                    price:{' '}
                    <span className='text-primary-900 uppercase'>
                      {product?.price}$
                    </span>
                  </span>
                </div>
                <div className='p-3 flex flex-col gap-4 h-full'>
                  <div className='flex justify-between items-center text-xs'>
                    <span className='text-primary-900 font-semibold'>
                      <span className=' text-gray-500'>Created At: </span>
                      {moment(product.createdAt).format('l')}
                    </span>
                    <span className='text-primary-900 font-semibold'>
                      <span className='text-gray-500'>Updated At: </span>
                      {moment(product.updatedAt).format('l')}
                    </span>
                  </div>
                  <h4 className='font-bold'>{product.title}</h4>
                  <p>
                    {product?.description.length > 50
                      ? `${product?.description.slice(0, 50)}...`
                      : product?.description}
                  </p>
                  <div className='flex items-center gap-2 w-full mt-auto text-center'>
                    <button
                      onClick={() => openDetails(product)}
                      className='py-1.5 px-6 w-full rounded-lg bg-gray-200 hover:bg-gray-300 transition text-primary-900'
                    >
                      Details
                    </button>
                    <button
                      onClick={() => deleteSpecial(product)}
                      className='py-1.5 w-full px-6 rounded-lg bg-red-500 hover:bg-red-600 transition text-white'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {detailsOn ? (
        <div
          className='absolute inset-0 flex items-center justify-center bg-black/50'
          id='container'
          onClick={handleClose}
        >
          <div className='max-w-2xl mx-auto max-h-[90vh] overflow-y-auto w-full bg-white rounded-2xl no-scrollbar'>
            <div className='flex items-center justify-between w-full mb-2 sticky top-0 bg-white p-4 shadow-md'>
              <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
                Special Details
              </h3>
              <button onClick={closeDetails}>
                <BsX className='bg-red-500 text-white p-1 rounded-full text-3xl md:text-4xl' />
              </button>
            </div>
            <form className='flex flex-col w-full gap-2 px-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='title'>title</label>
                <input
                  type='text'
                  id='title'
                  readOnly
                  value={special?.title}
                  className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='price '>price</label>
                <input
                  type='number'
                  id='price'
                  readOnly
                  value={special?.price}
                  className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  id='description'
                  readOnly
                  value={special?.description}
                  className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                  rows={4}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <span>special</span>
                <label
                  htmlFor='special'
                  className='relative h-8 w-14 cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id='special'
                    readOnly
                    checked={special?.special}
                    className='peer sr-only'
                  />
                  <span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary-900'></span>
                  <span className='absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6'></span>
                </label>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='img'>image</label>
                <div className='flex items-center gap-4'>
                  <div className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
                    <Image
                      fill
                      className='object-cover'
                      alt='Image'
                      src={special?.imageUrl}
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-end gap-4'>
                <button
                  type='button'
                  onClick={closeDetails}
                  className='bg-gray-300 hover:bg-gray-400 transition py-2 my-6 px-8 rounded-lg'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Specials
