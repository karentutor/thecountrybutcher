const Map = () => {
  return (
    <div id='map'>
      <iframe
        src={process.env.NEXT_PUBLIC_MAP_STRING}
        className='border-none w-full h-[400px]'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Map
