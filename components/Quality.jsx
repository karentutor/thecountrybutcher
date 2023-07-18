import Image from 'next/image'

const Quality = () => {
  return (
    <div className='flex max-w-7xl mx-auto w-full flex-col md:flex-row py-14 md:py-20 px-5'>
      {/* Content */}
      <div className='flex-1 px-6 md:px-10 py-10 md:py-24 flex flex-col gap-4 md:gap-8 bg-white font-cormorant'>
        <h3 className='uppercase text-4xl text-secondary font-bold font-oswald leading-relaxed md:!leading-[4rem]'>
          Lorem ipsum dolor sit amet.
        </h3>
        <p className='text-2xl text-gray-600 font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eius quibusdam modi dolor adipisci sapiente?
        </p>
        <p className='text-2xl text-gray-600 font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est vel
          consequuntur mollitia beatae amet odit suscipit repudiandae sit
          voluptatibus molestiae nam, cum illo quod? Quos ex nulla consectetur,
          dolor inventore, ut quod tempora recusandae molestias asperiores eos
          maxime nostrum.
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
