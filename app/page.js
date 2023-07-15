import About from '@/components/About'
import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
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
    </main>
  )
}

export default Home
