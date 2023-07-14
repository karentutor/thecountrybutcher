const Banner = () => {
  return (
    <div className='bg-white w-full py-16 md:py-24 px-5 text-gray-600'>
      <div className=' flex flex-col gap-14 max-w-6xl mx-auto'>
        <h3 className='text-secondary text-4xl md:text-5xl lg:text-6xl'>
          WELCOME FARMERS AND RANCHERS
        </h3>
        <p className='text-xl leading-loose'>
          At Gunter Bros Meat Company we specialize in custom cutting,
          processing, sausage making, and curing. We are located in the Comox
          Valley, and have served farmers and ranchers on Vancouver Island for
          more than 30 years with our processing facility. Please see our custom
          cutting page for pricing, and more information.
        </p>
      </div>
    </div>
  )
}

export default Banner
