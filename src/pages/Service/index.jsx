import React from 'react'
import Navbar from '../../components/layouts/Navbar';
import BreadCrumb from '../../components/common/BreadCrumb';
import OurServices from '../../features/services/OurServices';
import Footer from '../../components/layouts/Footer';

const Serivces = () => {
  return (
    <>
          <BreadCrumb title={ "Service" } />
          <OurServices />
          <Footer/>
    </>
  )
}

export default Serivces;
