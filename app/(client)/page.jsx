import About from '@/components/About'
import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Quality from '@/components/Quality'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import { slides } from '@/data'

const Home = () => {
  return (
    <>
      <Hero
        title='Lorem ipsum dolor sit amet consectetur.'
        slides={slides}
        btnText='Order now'
        btnUrl='/product-list'
      />
      <Quality />
      <Banner
        title='Lorem ipsum dolor sit amet.'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil
          quisquam saepe pariatur, sed, sint qui quae vero commodi minus amet
          reprehenderit? Illum enim ex numquam! Deleniti maiores quis est,
          necessitatibus exercitationem, libero earum obcaecati quisquam porro
          aperiam facere nulla. Quia praesentium officia harum deserunt.'
      />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <Map />
    </>
  )
}

export default Home
