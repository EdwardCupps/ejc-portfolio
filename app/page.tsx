import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import OrnamentBand from '@/components/OrnamentBand'
import Philosophy from '@/components/Philosophy'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <OrnamentBand />
      <Philosophy />
      <OrnamentBand startWithDiamond />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
