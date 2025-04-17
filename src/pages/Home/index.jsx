import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Hero from '../../components/common/Hero'
import About from '../About'
import Price from '../Price'
import Testimonial from '../../features/barber/Testimonial'
import OurTeam from '../../features/barber/ourBarberTeam'
import ContactForm from '../../features/services/ContactForm'
import LatestBlog from '../../features/services/LatestFormBlog'
import Footer from '../../components/layouts/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Price />
      <Testimonial />
      <OurTeam />
      <ContactForm />
      <LatestBlog />
      <Footer/>
    </>
  )
}

export default Home
