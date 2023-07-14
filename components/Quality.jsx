import Image from 'next/image'

const Quality = () => {
  return (
    <div className='flex max-w-7xl mx-auto w-full flex-col md:flex-row py-14 md:py-20 px-5'>
      {/* Content */}
      <div className='flex-1 px-6 md:px-10 py-10 md:py-24 flex flex-col gap-4 md:gap-8 bg-white font-cormorant'>
        <h3 className='uppercase text-4xl text-secondary font-bold font-oswald leading-relaxed md:!leading-[4rem]'>
          The Country Butcher QUALITY
        </h3>
        <p className='text-2xl text-gray-600 font-bold'>
          For more than 30 years, The Country Butcher Meats has been helping
          families eat better and live healthier lives.
        </p>
        <p className='text-2xl text-gray-600 font-bold'>
          Our retail store offers a wide selection of fresh and frozen cuts for
          you to choose from. Our storefront has a variety of cuts of beef,
          pork, chicken, and lamb, as well as our in house made sausages and
          smoked products. We also offer 10 lb cases and mixed meat packs to
          stock your freezer. Most of our customers don’t make it out the door,
          before biting into a piece of our famous homemade pepperoni!
        </p>
      </div>
      {/* Image */}
      <div className='flex-1 w-full'>
        <Image
          src='/imgs/quality.png'
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
