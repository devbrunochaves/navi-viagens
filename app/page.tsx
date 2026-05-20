import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ReviewsRibbon from '@/components/ReviewsRibbon'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Destinations from '@/components/Destinations'
import WhyNavi from '@/components/WhyNavi'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function Home() {
  return (
    <>
      <FloatingElements />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ReviewsRibbon />
        <Services />
        <Experience />
        <Destinations />
        <WhyNavi />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
