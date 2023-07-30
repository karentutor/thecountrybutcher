import Image from 'next/image'

const Services = () => {
  return (
    <div className='bg-white w-full py-14 md:py-20'>
      <div className='flex flex-col justify-center items-center gap-10 max-w-6xl mx-auto px-5'>
        {/* Heading */}
        <div className='flex flex-col gap-4 max-w-xl mx-auto text-center'>
          <h3 className='uppercase text-4xl md:text-5xl font-bold text-secondary'>
            Our Services
          </h3>
          <p className='text-lg text-gray-600'>
            We offer custom cuts of beef, pork or lamb we also offer local
            grass-fed grass-finished beef to be purchased by either quarter,
            side or full animal fully cut and wrapped.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-20'>
          <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <h4 className='py-3 text-primary-900 font-bold text-2xl md:text-3xl lg:text-4xl w-fit'>
                Custom Cutting
              </h4>
              <p className='text-xl text-gray-600'>
                WE support local famers with custom cutting of their Pork, Beef
                or Lamb to their needs and requirements.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='py-3 text-primary-900 font-bold text-2xl md:text-3xl lg:text-4xl w-fit'>
                Custom Orders
              </h4>
              <p className='text-xl text-gray-600'>
                We can do your custom orders to your requirements on either
                Beef, Lamb or Pork.
              </p>
            </div>
          </div>
          <div className='flex-1'>
            <Image
              width={0}
              height={0}
              sizes='100vw'
              src='/imgs/services.jpg'
              alt='piece of meat'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
