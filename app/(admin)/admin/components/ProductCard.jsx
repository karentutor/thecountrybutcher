'use client'

import axios from 'axios'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import moment from 'moment'

const ProductCard = ({
  product,
  getProducts,
  setIsLoading,
  setProduct,
  setDetailsOn,
}) => {
  const deleteProduct = async () => {
    setIsLoading(true)
    await axios
      .delete('/api/products', attendee)
      .then((res) => {
        toast.success('Product Deleted Successfully')
        getProducts()
      })
      .catch((err) => {
        console.error(err)
        toast.error('Error, Something went wrong')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='max-w-[280px] md:max-w-xs border bg-white border-gray-200 min-w-[280px] md:min-w-[320px] hover:shadow-lg transition duration-150 ease-in-out rounded-lg border-solid h-[420px] flex flex-col'>
      <div className='rounded-tl-lg relative rounded-tr-lg overflow-hidden h-full'>
        <Image
          src={product?.imageUrl}
          alt={product?.title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-56 object-cover'
        />
        <span className='border absolute top-4 right-2 border-gray-400 rounded-full bg-white px-4 py-1 text-sm'>
          price:{' '}
          <span className='text-primary-900 uppercase'>{product?.price}$</span>
        </span>
      </div>
      <div className='p-3 flex flex-col h-full'>
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
        <h4 className='font-bold my-3'>{product.title}</h4>
        <p>
          {product?.description.length > 50
            ? `${product?.description.slice(0, 50)}...`
            : product?.description}
        </p>
        <div className='flex items-center gap-2 w-full mt-auto text-center'>
          <button
            onClick={() => {
              setProduct(product)
              setDetailsOn(true)
            }}
            className='py-1.5 px-6 w-full rounded-lg bg-gray-200 hover:bg-gray-300 transition text-primary-900'
          >
            Details
          </button>
          <button
            onClick={deleteProduct}
            className='py-1.5 w-full px-6 rounded-lg bg-red-500 hover:bg-red-600 transition text-white'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
