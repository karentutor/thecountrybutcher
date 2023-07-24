'use client'

import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CldUploadWidget } from 'next-cloudinary'
import { BsImageAlt, BsTrash, BsX } from 'react-icons/bs'

import ProductCard from '../components/ProductCard'
import Loader from '@/components/Loader'
import { toast } from 'react-hot-toast'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [modalOn, setModalOn] = useState(false)
  const [detailsOn, setDetailsOn] = useState(false)
  const [editOn, setEditOn] = useState(false)
  const [product, setProduct] = useState({})

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const {
    register: editRegister,
    reset: editReset,
    handleSubmit: editHandleSubmit,
    watch: editWatch,
    setValue: editSetValue,
    formState: { errors: editErrors },
  } = useForm()

  const getProducts = () => {
    setIsLoading(true)
    axios
      .get('/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))
  }

  const onUpload = (result) => {
    setValue('imageUrl', result.info.secure_url)
  }
  const onEditUpload = (result) => {
    editSetValue('imageUrl', result.info.secure_url)
  }

  const onSubmit = (data) => {
    console.log(data)

    setIsLoading(true)
    axios
      .post('/api/products', data)
      .then((res) => {
        console.log(res)
        setModalOn(false)
        toast.success('Product Created Successfully')
        reset()
        getProducts()
      })
      .catch((err) => {
        console.error(err)
        toast.error('Error, Something went wrong')
        setModalOn(false)
        reset()
      })
      .finally(() => setIsLoading(false))
  }

  const onEditSubmit = (data) => {
    setIsLoading(true)

    if (!data?.imageUrl) data.imageUrl = product?.imageUrl
    console.log(data)

    axios
      .patch(`/api/products/${product?.id}`, data)
      .then((res) => {
        console.log(res)
        setEditOn(false)
        toast.success('Product Edited Successfully')
        editReset()
        getProducts()
      })
      .catch((err) => {
        console.error(err)
        toast.error('Error, Something went wrong')
        setEditOn(false)
        reset()
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const openModal = () => {
    setModalOn(true)
  }

  const closeModal = () => {
    setModalOn(false)
    reset()
  }

  const closeDetails = () => setDetailsOn(false)
  const closeEdit = () => setEditOn(false)

  const handleClose = (e) => {
    if (e.target.id === 'container') {
      closeModal()
      closeDetails()
      closeEdit()
    }
  }

  return (
    <>
      <div className='flex justify-between items-center gap-2 my-4'>
        <h1 className='text-2xl lg:text-3xl font-bold'>Products</h1>
        <button
          onClick={openModal}
          className='flex justify-center items-center gap-2 text-lg py-2 md:px-5 px-3 border rounded-lg bg-primary-800 hover:bg-primary-900 transition text-white'
        >
          New Product
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 py-6'>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              setIsLoading={setIsLoading}
              getProducts={getProducts}
              setProduct={setProduct}
              setDetailsOn={setDetailsOn}
              setEditOn={setEditOn}
            />
          ))}
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
                Create Product
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
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>special</label>
                <label
                  htmlFor='special'
                  className='relative h-8 w-14 cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id='special'
                    {...register('special')}
                    className='peer sr-only'
                  />
                  <span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary-900'></span>
                  <span className='absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6'></span>
                </label>
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
                        disabled={isLoading}
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
                  disabled={isLoading}
                  className={`bg-primary-800 hover:bg-primary-900 transition text-white py-2 my-6 px-8 rounded-lg ${
                    isLoading && 'opacity-50'
                  }`}
                >
                  {isLoading ? 'Creating product...' : 'Create Product'}
                </button>
                <button
                  type='button'
                  disabled={isLoading}
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
                Product Details
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
                  value={product?.title}
                  className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='price '>price</label>
                <input
                  type='number'
                  id='price'
                  readOnly
                  value={product?.price}
                  className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  id='description'
                  readOnly
                  value={product?.description}
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
                    checked={product?.special}
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
                      src={product?.imageUrl}
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
      {editOn ? (
        <div
          className='absolute inset-0 flex items-center justify-center bg-black/50'
          id='container'
          onClick={handleClose}
        >
          <div className='max-w-2xl mx-auto max-h-[90vh] overflow-y-auto w-full bg-white rounded-2xl no-scrollbar'>
            <div className='flex items-center justify-between w-full mb-2 sticky top-0 bg-white p-4 shadow-md'>
              <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
                Edit Product
              </h3>
              <button onClick={closeEdit}>
                <BsX className='bg-red-500 text-white p-1 rounded-full text-3xl md:text-4xl' />
              </button>
            </div>
            <form
              className='flex flex-col w-full gap-2 px-4'
              onSubmit={editHandleSubmit(onEditSubmit)}
            >
              <div className='flex flex-col gap-1'>
                <label htmlFor='title'>title</label>
                <input
                  type='text'
                  id='title'
                  defaultValue={product?.title}
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    editErrors.title ? 'border-red-500' : 'border-gray-400'
                  }`}
                  {...editRegister('title', {
                    required: { value: true, message: 'required' },
                    maxLength: { value: 50, message: 'max length 50 char' },
                  })}
                />
                <div className='flex items-center justify-between'>
                  {editErrors.title ? (
                    <span className='text-red-500 text-xs'>
                      {editErrors.title.message}
                    </span>
                  ) : null}
                  <span
                    className={`text-sm flex justify-end w-full ${
                      editWatch('title')?.length > 50 ? 'text-red-500' : ''
                    }`}
                  >
                    {editWatch('title')?.length || 0} / 50
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='price '>price</label>
                <input
                  type='number'
                  id='price'
                  defaultValue={product?.price}
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    editErrors.price ? 'border-red-500' : 'border-gray-400'
                  }`}
                  {...editRegister('price', {
                    required: { value: true, message: 'required' },
                    min: { value: 1, message: 'the minimum price is 1' },
                    valueAsNumber: true,
                  })}
                />
                {editErrors.price ? (
                  <span className='text-red-500 text-xs'>
                    {editErrors.price.message}
                  </span>
                ) : null}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  id='description'
                  defaultValue={product?.description}
                  className={`w-full border py-2 px-4 outline-none rounded-lg ${
                    editErrors.description
                      ? 'border-red-500'
                      : 'border-gray-400'
                  }`}
                  rows={3}
                  {...editRegister('description', {
                    required: {
                      value: true,
                      message: 'required',
                    },
                    maxLength: { value: 300, message: 'max length 300 char' },
                  })}
                />
                <div className='flex items-center justify-between'>
                  {editErrors.description ? (
                    <span className='text-red-500 text-xs'>
                      {editErrors.description.message}
                    </span>
                  ) : null}
                  <span
                    className={`text-sm flex justify-end w-full ${
                      editWatch('description')?.length > 300
                        ? 'text-red-500'
                        : ''
                    }`}
                  >
                    {editWatch('description')?.length || 0} / 300
                  </span>
                </div>
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
                    defaultChecked={product?.special}
                    {...editRegister('special')}
                    className='peer sr-only'
                  />
                  <span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary-900'></span>
                  <span className='absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6'></span>
                </label>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='img'>image</label>
                <div className='space-y-2'>
                  {(product?.imageUrl || editWatch('imageUrl')) && (
                    <div className='flex items-center gap-4'>
                      <div className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
                        <div className='z-10 absolute top-2 right-2'>
                          <button
                            className='p-1.5 bg-red-500 hover:bg-red-600 transition text-white rounded-lg'
                            type='button'
                            onClick={() =>
                              editWatch('imageUrl')
                                ? editSetValue('imageUrl', '')
                                : setProduct((prev) => ({
                                    ...prev,
                                    imageUrl: '',
                                  }))
                            }
                          >
                            <BsTrash className='h-4 w-4' />
                          </button>
                        </div>
                        <Image
                          fill
                          className='object-cover'
                          alt='Image'
                          src={
                            editWatch('imageUrl')
                              ? editWatch('imageUrl')
                              : product?.imageUrl
                          }
                        />
                      </div>
                    </div>
                  )}
                  <CldUploadWidget
                    options={{ multiple: false, showUploadMoreButton: false }}
                    onUpload={onEditUpload}
                    uploadPreset='mkthmfdq'
                  >
                    {({ open }) => (
                      <button
                        type='button'
                        disabled={isLoading}
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
                  disabled={isLoading}
                  className={`bg-primary-800 hover:bg-primary-900 transition text-white py-2 my-6 px-8 rounded-lg ${
                    isLoading && 'opacity-50'
                  }`}
                >
                  {isLoading ? 'Editing product...' : 'Edit Product'}
                </button>
                <button
                  type='button'
                  disabled={isLoading}
                  onClick={closeEdit}
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

export default Products
