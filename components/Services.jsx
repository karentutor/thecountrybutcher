import Image from 'next/image'

const Services = () => {
  return (
    <div className='bg-white w-full py-14 md:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-[240px_220px_1fr_240px_250px] md:grid-rows-[200px_200px_200px] gap-4 max-w-7xl mx-auto px-5'>
        {/* 1 */}
        <div className='flex flex-col gap-4'>
          <h3 className='uppercase text-4xl md:text-5xl font-bold text-secondary'>
            Our Services
          </h3>
          <p className='text-lg text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            labore provident expedita ab qui incidunt veniam commodi fuga
            quaerat explicabo id placeat inventore veritatis recusandae maiores
            similique obcaecati, nulla rerum doloremque omnis.
          </p>
        </div>
        {/* 2 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Custom Cutting
          </h4>
          <p className='text-lg text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum
            quo qui tempore temporibus ducimus. Error saepe, numquam cumque
            tempora eligendi odio asperiores voluptatum.
          </p>
        </div>
        {/* 3 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Custom Orders
          </h4>
          <p className='text-lg text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            incidunt autem nostrum, placeat quae dolor. Doloremque enim
            reiciendis quia corrupti nam nostrum nobis eos obcaecati iusto
            itaque neque, aliquam consequatur voluptates dolores nulla illum
            doloribus laudantium repellat sapiente asperiores ad.
          </p>
        </div>
        <Image
          width={0}
          height={0}
          sizes='100vw'
          src='/imgs/services.jpg'
          alt='piece of meat'
          className='w-full h-full object-contain md:row-span-2'
        />
        {/* 4 */}
        <div className='flex flex-col gap-4'>
          <h4 className='py-3 text-primary-900 text-2xl md:text-3xl w-fit'>
            Whole animal purchases
          </h4>
          <p className='text-lg text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            repellat sed incidunt iure molestiae. Vel magni velit molestias,
            doloribus consequuntur incidunt sed iure soluta sint, rerum numquam
            eveniet laborum assumenda saepe exercitationem temporibus, possimus
            vitae.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
