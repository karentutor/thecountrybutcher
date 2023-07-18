import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='flex max-w-7xl mx-auto w-full flex-col md:flex-row py-8 md:py-20 px-5'>
      {/* Content */}
      <div className='flex-1 px-6 md:px-10 py-8 md:py-24 flex flex-col gap-4 md:gap-8 bg-white font-cormorant'>
        <h3 className='uppercase text-4xl text-secondary font-bold font-oswald !leading-[4rem]'>
          WHO WE ARE
        </h3>
        <p className='text-2xl text-gray-600 font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque.
          Ab dicta natus consequatur, nemo ex nulla labore amet aliquam iste
          eaque asperiores quod quo assumenda fuga suscipit sit distinctio
          obcaecati sed itaque explicabo excepturi dolorem dolor consectetur.
          Fugit ullam iusto eaque tempore beatae reiciendis Lorem ipsum dolor
          sit amet consectetur.{' '}
          <Link href='/about' className='text-primary-900'>
            READ MORE
          </Link>
        </p>
      </div>
      {/* Image */}
      <div className='flex-1 w-full'>
        <Image
          src='/imgs/about.jpg'
          alt='meat'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-[520px] object-cover'
        />
      </div>
    </div>
  )
}

export default About
