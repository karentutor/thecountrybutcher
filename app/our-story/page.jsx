import Image from 'next/image'

const OurStory = () => {
  return (
    <div className='font-oswald'>
      {/* Hero */}
      <div className='md:h-screen w-full'>
        <Image
          src='/imgs/story-hero.jpg'
          width={0}
          height={0}
          sizes='100vw'
          alt='big family'
          className='w-full h-full object-contain md:object-cover'
        />
      </div>
      <div className='bg-secondary text-white'>
        {/* Story */}
        <div className='px-5 flex flex-col gap-4 md:gap-8 pt-14 md:pt-20 max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, at
            cum
          </h1>
          <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            distinctio cupiditate quaerat est iusto veniam a esse fugit! Culpa
            unde quis sint? Enim corporis praesentium distinctio error
            consectetur quod fugit.
          </p>
          <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            laudantium tempora quod quas quo voluptatem ipsam illum nesciunt et
            nemo sed, assumenda placeat accusantium quasi facere quibusdam ad
            ratione saepe. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rem, molestias tempore! Autem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Deserunt quibusdam minima velit veniam
            sequi veritatis quae ullam dolorum, ut voluptatum!
          </p>
        </div>
        {/* story 2 */}
        <div className='px-5 flex flex-col md:flex-row gap-8 pt-14 md:pt-20 max-w-7xl mx-auto'>
          {/* image */}
          <div className='flex-1'>
            <Image
              src='/imgs/story2.jpg'
              alt='small familly'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Content */}
          <div className='flex-1 flex flex-col justify-center gap-6'>
            <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
              voluptate deleniti minus exercitationem odit ex qui atque
              assumenda dolor rerum velit, officiis non eligendi enim
              repudiandae sequi consectetur molestiae. Repellendus voluptatum
              sint recusandae vel!
            </p>
            <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              ratione porro dignissimos, dolorum fuga tempore corrupti ad
              perspiciatis? Ipsa earum debitis qui quis mollitia at laudantium
              nulla repellendus sit ullam et autem tenetur ut, quasi fuga
              consequuntur adipisci cumque natus atque expedita. Obcaecati,
              quibusdam adipisci!
            </p>
          </div>
        </div>
        {/* story 3 */}
        <div className='px-5 flex flex-col md:flex-row gap-8 py-14 md:py-20 max-w-7xl mx-auto'>
          {/* image */}
          <div className='flex-1'>
            <Image
              src='/imgs/story3.jpg'
              alt='small familly'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Content */}
          <div className='flex-1 flex flex-col justify-center gap-6'>
            <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
              voluptate deleniti minus exercitationem odit ex qui atque
              assumenda dolor rerum velit, officiis non eligendi enim
              repudiandae sequi consectetur molestiae. Repellendus voluptatum
              sint recusandae vel!
            </p>
            <p className='text-gray-200 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              ratione porro dignissimos, dolorum fuga tempore corrupti ad
              perspiciatis? Ipsa earum debitis qui quis mollitia at laudantium
              nulla repellendus sit ullam et autem tenetur ut, quasi fuga
              consequuntur adipisci cumque natus atque expedita. Obcaecati,
              quibusdam adipisci!
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white px-5'>
        {/* Images */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto py-12 md:py-16'>
          <Image
            src='/imgs/meat1.jpg'
            alt='meat1'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
          <Image
            src='/imgs/meat2.jpg'
            alt='meat1'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
          <Image
            src='/imgs/meat3.jpg'
            alt='meat1'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        {/* Cards */}
        <div className='flex flex-col md:flex-row gap-12 max-w-7xl mx-auto py-12 md:py-16'>
          {/* Card 1 */}
          <div className='flex-1 flex flex-col gap-8 p-6'>
            <h2 className='text-secondary text-3xl md:text-4xl lg:text-5xl'>
              Lorem, ipsum dolor.
            </h2>
            <p className='text-gray-600 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              ipsa, esse dolorem voluptates dignissimos rem necessitatibus
              fugiat reiciendis quasi dolor provident voluptatum. Animi,
              inventore praesentium?
            </p>
            <p className='text-gray-600 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quidem. Architecto facilis voluptates dolor? Sapiente a dolores
              voluptatum in mollitia, molestias dolorem dicta. Officiis ad
              magnam, impedit sapiente odio praesentium atque accusamus sequi
              labore iure.
            </p>
          </div>
          {/* Card 2 */}
          <div className='flex-1 flex flex-col gap-8 bg-primary-200 p-6'>
            <h2 className='text-secondary text-3xl md:text-4xl lg:text-5xl'>
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className='text-gray-600 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              ipsa, esse dolorem voluptates dignissimos rem necessitatibus
              fugiat reiciendis quasi dolor provident voluptatum. Animi,
              inventore praesentium?
            </p>
            <p className='text-gray-600 text-xl md:text-2xl font-thin leading-relaxed md:leading-loose'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              voluptates dolor? Sapiente a dolores labore iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
