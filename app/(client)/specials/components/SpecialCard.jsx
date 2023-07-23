import Image from 'next/image'

const SpecialCard = ({ product }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-3 w-fit'>
      <div className='overflow-hidden w-[350px] h-[400px] shadow-lg'>
        <Image
          src={product.img}
          alt={product.name}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover hover:scale-105 transition-all'
        />
      </div>
      <div className='space-y-2'>
        <h3 className='text-2xl tracking-widest font-bold uppercase text-secondary'>
          {product.name}
        </h3>
        <p className='text-primary-900 text-3xl mt-4'>{product.price}</p>
      </div>
    </div>
  )
}

export default SpecialCard
