import Image from 'next/image'

const SpecialCard = ({ product }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-3 w-fit hover:shadow-lg bg-white border border-gray-300'>
      <div className='overflow-hidden w-[350px] h-80'>
        <Image
          src={product?.imageUrl}
          alt={product?.title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-80 object-cover hover:scale-105 transition-all'
        />
      </div>
      <div className='space-y-4'>
        <h3 className='text-2xl tracking-widest font-bold uppercase text-secondary'>
          {product?.title}
        </h3>
        <p className='text-gray-600 text-center'>
          {product?.description?.length > 50
            ? `${product?.description?.slice(0, 50)}...`
            : product?.description}
        </p>
        <p className='text-primary-900 text-3xl pb-4'>${product?.price}</p>
      </div>
    </div>
  )
}

export default SpecialCard
