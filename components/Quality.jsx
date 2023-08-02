import Image from 'next/image'

const Quality = () => {
  return (
    <div className='flex max-w-7xl mx-auto w-full flex-col md:flex-row py-14 md:py-20 px-5'>
      {/* Content */}
      <div className='flex-1 px-6 md:px-10 py-10 md:py-16 flex flex-col gap-4 md:gap-8 bg-white font-cormorant'>
        <div className='font-oswald'>
          <h3 className='uppercase text-[26px] text-secondary font-bold leading-relaxed'>
            <span className='text-primary-900'>OLD .... </span> FASHIONED
            BUTCHERY WITH A <span className='text-primary-900'>MODERN</span>{' '}
            TWIST
          </h3>
        </div>
        <p className='text-2xl text-gray-600 font-bold'>
          We are a traditional butcher shop that specializes in high-quality
          meats and meat products. We source our meats from local farms or
          ranches when available.
        </p>
        <p className='text-2xl text-gray-600 font-bold'>
          We pride themselves on offering a wide variety of fresh meats,
          including Beef, Pork, Lamb and Poultry. In addition, we make all our
          pepperoni, smoked bacon, artisan sausage in house using old-style
          traditional methods in a modern facility.
        </p>
      </div>
      {/* Image */}
      <div className='flex-1 w-full'>
        <Image
          src='/imgs/quality.jpg'
          alt='meat'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Quality
