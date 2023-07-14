import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Quality from '@/components/Quality'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <main>
      <Hero />
      <Quality />
      <Banner />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <Map />
    </main>
  )
}

export default Home
