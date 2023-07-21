const Banner = ({ title, description }) => {
  return (
    <div className='bg-white w-full py-16 md:py-24 px-5 text-gray-600'>
      <div className=' flex flex-col gap-8 md:gap-14 max-w-6xl mx-auto'>
        <h3 className='text-secondary text-4xl md:text-5xl lg:text-6xl uppercase'>
          {title}
        </h3>
        <p className='text-xl leading-loose'>{description}</p>
      </div>
    </div>
  )
}

export default Banner
