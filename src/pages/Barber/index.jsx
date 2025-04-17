import React from 'react'
import BreadCrumb from '../../components/common/BreadCrumb'
import OurTeam from '../../features/barber/ourBarberTeam'
import Footer from '../../components/layouts/Footer';

const Barber = () => {
  const isHome = location.pathname === "/";
  return (
    <>
          <BreadCrumb title={"Our Team"} />
      <OurTeam />
      {!isHome && <Footer />}
          
    </>
  )
}

export default Barber
