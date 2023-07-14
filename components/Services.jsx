import Image from 'next/image'

const Services = () => {
  return (
    <div className='bg-white w-full py-14 md:py-20 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_180px_1fr_240px_200px] md:grid-rows-[200px_200px_200px] gap-4 max-w-7xl mx-auto'>
        {/* 1 */}
        <div className='flex flex-col gap-4'>
          <h3 className='uppercase text-4xl md:text-5xl font-bold text-secondary'>
            Our Services
          </h3>
          <p className='text-lg text-gray-600'>
            Meat Craft Butchery specializes in locally, and ethically raised
            meat. We employ skilled experienced butchers and take great pride in
            the cuts we offer daily. In addition to the amazing quality of meats
            and knowledgeable staff we offer a variety of other valuable
            services.
          </p>
        </div>
        {/* 2 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Custom Cutting
          </h4>
          <p className='text-lg text-gray-600'>
            Any of our butchers will cut product to your liking, just ask ! To
            avoid wait times give us a call at the shop to have it ready and
            waiting when you arrive.
          </p>
        </div>
        {/* 3 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Custom Orders
          </h4>
          <p className='text-lg text-gray-600'>
            Don't see it in the case? We probably have it in the back cooler or
            freezer, please ask. If we don't have what you need in stock we can
            probably order it for you, talk to our knowledgeable butchers. Some
            popular items we often carry but don't necessarily display are goat,
            ox tail, chicken feet and other soup bones, liver, kidney just to
            name a few.
          </p>
        </div>
        <Image
          width={0}
          height={0}
          sizes='100vw'
          src='/imgs/services.webp'
          alt='piece of meat'
          className='w-full h-full object-contain md:row-span-2'
        />
        {/* 4 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Whole animal purchases
          </h4>
          <p className='text-lg text-gray-600'>
            Hosting a pig roast, roasting a whole lamb or just want to fill up
            the freezer? Our butchers can source you a beautiful local,
            ethically raised animal in the approximate size you need. Call for
            pricing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
