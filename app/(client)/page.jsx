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
        title='YOUR LOCAL ARTISAN AND TRADITIONAL BUTCHER'
        title2='BAKERY OPENING SOON! '
        slides={slides}
        btnText='Order now'
        btnUrl='/product-list'
      />
      <Quality />
      <Services />
      <Testimonials />
      <Map />
    </>
  )
}

export default Home
