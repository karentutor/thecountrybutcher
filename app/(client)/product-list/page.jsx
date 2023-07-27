'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import axios from 'axios'

import Loader from '@/components/Loader'
import Map from '@/components/Map'

const ProductList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => axios.get('/api/products'),
  })

  return (
    <>
      {/* Hero */}
      <div className='flex max-w-7xl mx-auto w-full flex-col items-center lg:flex-row gap-8 pb-10 pt-28 px-5'>
        {/* Image */}
        <div className='md:h-[600px] md:w-[600px]'>
          <Image
            src='/imgs/product-list.jpg'
            alt='meat'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        {/* Content */}
        <div className='flex-1 font-cormorant'>
          <div className='px-6 md:px-10 py-8 flex flex-col items-center justify-center text-center gap-4 md:gap-6 bg-white h-fit'>
            <h3 className='uppercase text-4xl md:text-5xl text-secondary font-bold font-oswald leading-relaxed md:!leading-[4rem]'>
              Ready products
            </h3>
            <p className='text-3xl text-primary-900 font-bold underline'>
              Lorem ipsum dolor sit.
            </p>
            <p className='text-xl text-gray-600 font-bold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              sunt voluptatem dignissimos dolore, unde eius autem, sed harum cum
              dolorem odit alias corporis delectus reiciendis odio ullam
              deleniti consequatur dolores vitae ipsam. Cupiditate obcaecati
              nihil reiciendis deserunt necessitatibus quisquam, placeat,
              consectetur earum, consequatur hic sed?
            </p>
            <button className='bg-primary-900 font-oswald px-12 py-4 mt-4 text-xl tracking-widest text-white uppercase w-fit'>
              View Products
            </button>
          </div>
        </div>
      </div>
      {/* Products section */}
      <div className='bg-white px-5 py-12 md:py-16'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <div className='flex flex-col gap-8'>
            <h1 className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-secondary'>
              shop online
            </h1>
            <p className='text-xl text-primary-900'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              soluta quo velit!
            </p>
          </div>
          {/* Products */}
          {isLoading ? (
            <Loader fullPage={false} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {products?.data?.map((product) => (
                <div className='flex flex-col gap-3 w-fit' key={product?.id}>
                  <div className='space-y-2'>
                    <h3 className='text-2xl md:text-3xl font-bold uppercase text-secondary'>
                      {product?.title}
                    </h3>
                    <p>${product?.price}</p>
                  </div>
                  <div className=''>
                    <Image
                      src={product?.imageUrl}
                      alt={product?.title}
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='object-cover h-[384px] w-full'
                    />
                  </div>
                  <p className='text-lg text-gray-600'>
                    {product?.description?.length > 100
                      ? `${product?.description?.slice(0, 100)}...`
                      : product?.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Map />
    </>
  )
}

export default ProductList
