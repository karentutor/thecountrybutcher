import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='flex max-w-7xl mx-auto w-full flex-col md:flex-row py-20 px-5'>
      {/* Content */}
      <div className='flex-1 px-6 md:px-10 py-8 md:py-24 flex flex-col gap-4 md:gap-8 bg-white font-cormorant'>
        <h3 className='uppercase text-4xl text-secondary font-bold font-oswald !leading-[4rem]'>
          WHO WE ARE
        </h3>
        <p className='text-2xl text-gray-600 font-bold'>
          Our story starts with our grandfather in the 1930’s. Previously
          trained as a butcher by his grandfather in England, he began as a
          small on-farm slaughter operation for his own animals. He did
          door-to-door sales in Cumberland County and Courtenay. In the 40’s and
          50’s, the operation was expanded to turkey farming, with 10,000
          turkeys. This expansion also required a cold storage unit facility.{' '}
          <Link href='/about' className='text-primary-900'>
            READ MORE
          </Link>
        </p>
      </div>
      {/* Image */}
      <div className='flex-1 w-full'>
        <Image
          src='/imgs/about.png'
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

export default About
