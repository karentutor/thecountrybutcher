'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { BsImageAlt, BsTrash, BsX } from 'react-icons/bs'
import moment from 'moment'
import { toast } from 'react-hot-toast'

import Loader from '@/components/Loader'
import { CldUploadWidget } from 'next-cloudinary'
import { useForm } from 'react-hook-form'

const Specials = () => {
  const [detailsOn, setDetailsOn] = useState(false)
  const [modalOn, setModalOn] = useState(false)
  const [special, setSpecial] = useState({})

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ['deleteSpecial'],
    mutationFn: (data) => axios.patch(`/api/products/${data._id}`, data),
    // onMutate: async (sp) => {
    //   await queryClient.cancelQueries({ queryKey: ['specials'] })

    //   const previousSpecial = queryClient.getQueryData(['specials'])

    //   queryClient.setQueryData(['specials'], sp)

    //   return { previousSpecial, sp }
    // },
    onSuccess: () => {
      toast.success('Product Removed from Specials Successfully')
      queryClient.invalidateQueries({ queryKey: ['specials'] })
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['specials'] }),
  })

  const createSpecial = useMutation({
    mutationFn: (data) => axios.post('/api/products', data),
    // onMutate: async (sp) => {
    //   await queryClient.cancelQueries({ queryKey: ['specials'] })

    //   const previousSpecial = queryClient.getQueryData(['specials'])

    //   queryClient.setQueryData(['specials'], sp)

    //   return { previousSpecial, sp }
    // },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['specials'] })
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['specials'],
    queryFn: () => axios.get('/api/specials'),
  })

  const deleteSpecial = (product) => {
    mutation.mutate({ ...product, special: false })
  }

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const onUpload = (result) => {
    setValue('imageUrl', result.info.secure_url)
  }

  const onSubmit = (data) => {
    data.special = true
    console.log(data)
    createSpecial.mutate(data, {
      onSuccess: () => {
        setModalOn(false)
        toast.success('Special Created Successfully')
        reset()
      },
      onError: () => {
        toast.error('Error, Something went wrong')
        setModalOn(false)
        reset()
      },
    })
  }

  const openModal = (p) => setModalOn(true)

  const closeModal = () => {
    setModalOn(false)
    setSpecial({})
    reset()
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
      <div className='flex justify-between items-center gap-2 my-4'>
        <h1 className='text-2xl lg:text-3xl font-bold'>Specials</h1>
        <button
          onClick={openModal}
          className='flex justify-center items-center gap-2 text-lg py-2 md:px-5 px-3 border rounded-lg bg-primary-800 hover:bg-primary-900 transition text-white'
        >
          New Special
        </button>
      </div>
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
                key={product._id}
                className='max-w-[280px] md:max-w-xs border bg-white border-gray-200 min-w-[280px] md:min-w-[320px] hover:shadow-lg transition duration-150 ease-in-out rounded-lg border-solid h-[450px] max-h-[450px]'
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
                <div className='p-3 flex flex-col gap-4 h-[200px]'>
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
      {modalOn ? (
        <div
          className='absolute inset-0 flex items-center justify-center bg-black/50'
          id='container'
          onClick={handleClose}
        >
          <div className='max-w-2xl mx-auto max-h-[90vh] overflow-y-auto w-full bg-white rounded-2xl no-scrollbar'>
            <div className='flex items-center justify-between w-full mb-2 sticky top-0 bg-white p-4 shadow-md'>
              <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
                Create Special
              </h3>
              <button onClick={closeModal}>
                <BsX className='bg-red-500 text-white p-1 rounded-full text-3xl md:text-4xl' />
              </button>
            </div>
            <form
              className='flex flex-col w-full gap-2 px-4'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-1'>
                <label htmlFor='title'>title</label>
                <input
                  type='text'
                  id='title'
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    errors.title ? 'border-red-500' : 'border-gray-400'
                  }`}
                  {...register('title', {
                    required: { value: true, message: 'required' },
                    maxLength: { value: 50, message: 'max length 50 char' },
                  })}
                />
                <div className='flex items-center justify-between'>
                  {errors.title ? (
                    <span className='text-red-500 text-xs'>
                      {errors.title.message}
                    </span>
                  ) : null}
                  <span
                    className={`text-sm flex justify-end w-full ${
                      watch('title')?.length > 50 ? 'text-red-500' : ''
                    }`}
                  >
                    {watch('title')?.length || 0} / 50
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='price '>price</label>
                <input
                  type='number'
                  id='price'
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    errors.price ? 'border-red-500' : 'border-gray-400'
                  }`}
                  {...register('price', {
                    required: { value: true, message: 'required' },
                    min: { value: 1, message: 'the minimum price is 1' },
                    valueAsNumber: true,
                  })}
                />
                {errors.price ? (
                  <span className='text-red-500 text-xs'>
                    {errors.price.message}
                  </span>
                ) : null}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  id='description'
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    errors.description ? 'border-red-500' : 'border-gray-400'
                  }`}
                  rows={3}
                  {...register('description', {
                    required: {
                      value: true,
                      message: 'required',
                    },
                    maxLength: { value: 300, message: 'max length 300 char' },
                  })}
                />
                <div className='flex items-center justify-between'>
                  {errors.description ? (
                    <span className='text-red-500 text-xs'>
                      {errors.description.message}
                    </span>
                  ) : null}
                  <span
                    className={`text-sm flex justify-end w-full ${
                      watch('description')?.length > 300 ? 'text-red-500' : ''
                    }`}
                  >
                    {watch('description')?.length || 0} / 300
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='img'>image</label>
                <div className='space-y-2'>
                  {watch('imageUrl') && (
                    <div className='flex items-center gap-4'>
                      <div
                        key={watch('imageUrl')}
                        className='relative w-[200px] h-[200px] rounded-md overflow-hidden'
                      >
                        <div className='z-10 absolute top-2 right-2'>
                          <button
                            className='p-1.5 bg-red-500 hover:bg-red-600 transition text-white rounded-lg'
                            type='button'
                            onClick={() => setValue('imageUrl', '')}
                          >
                            <BsTrash className='h-4 w-4' />
                          </button>
                        </div>
                        <Image
                          fill
                          className='object-cover'
                          alt='Image'
                          sizes='100vw'
                          src={watch('imageUrl')}
                        />
                      </div>
                    </div>
                  )}

                  <CldUploadWidget
                    options={{ multiple: false, showUploadMoreButton: false }}
                    onUpload={onUpload}
                    uploadPreset='mkthmfdq'
                  >
                    {({ open }) => (
                      <button
                        type='button'
                        disabled={createSpecial.isLoading}
                        onClick={() => open()}
                        className='py-2 px-6 rounded-lg flex items-center gap-2 bg-gray-200'
                      >
                        <BsImageAlt className='h-4 w-4' />
                        Upload an Image
                      </button>
                    )}
                  </CldUploadWidget>
                </div>
              </div>

              <div className='flex items-center justify-end gap-4'>
                <button
                  type='submit'
                  disabled={createSpecial.isLoading}
                  className={`bg-primary-800 hover:bg-primary-900 transition text-white py-2 my-6 px-8 rounded-lg ${
                    createSpecial.isLoading && 'opacity-50'
                  }`}
                >
                  {createSpecial.isLoading
                    ? 'Creating Special...'
                    : 'Create Special'}
                </button>
                <button
                  type='button'
                  disabled={createSpecial.isLoading}
                  onClick={closeModal}
                  className='bg-gray-300 hover:bg-gray-400 transition py-2 my-6 px-8 rounded-lg'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
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
