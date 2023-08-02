'use client'

import axios from 'axios'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import moment from 'moment'

const ProductCard = (props) => {
  const {
    product,
    getProducts,
    setIsLoading,
    setProduct,
    setDetailsOn,
    setEditOn,
  } = props

  const openDetails = (p) => {
    setProduct(p)
    setDetailsOn(true)
  }

  const openEdit = (p) => {
    setProduct(p)
    setEditOn(true)
  }

  const deleteProduct = async () => {
    setIsLoading(true)
    await axios
      .delete(`/api/products/${product?.id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Product Deleted Successfully')
          getProducts()
        } else {
          toast.error('Error, Something went wrong')
        }
      })
      .catch((err) => {
        console.error(err)
        toast.error('Error, Something went wrong')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='max-w-[280px] md:max-w-xs border bg-white border-gray-200 min-w-[280px] md:min-w-[320px] hover:shadow-lg transition duration-150 ease-in-out rounded-lg border-solid h-[450px] max-h-[450px]'>
      <div className='rounded-tl-lg relative rounded-tr-lg overflow-hidden h-[250px]'>
        <Image
          src={product?.imageUrl}
          alt={product?.title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover'
        />
        <span className='text-primary-900 uppercase border absolute top-4 right-2 border-gray-400 rounded-full bg-white px-2 py-1 text-lg font-bold'>
          ${product?.price}
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
            onClick={() => openEdit(product)}
            className='py-1.5 px-6 w-full rounded-lg bg-primary-800 hover:bg-primary-900 transition text-white'
          >
            Edit
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
