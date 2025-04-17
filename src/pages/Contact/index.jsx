import React from 'react'
import BreadCrumb from '../../components/common/BreadCrumb'
import Title from '../../components/common/Title'
import ContactForm from '../../features/services/ContactForm';
import Footer from '../../components/layouts/Footer';

const Contact = () => {
    const isHome = location.pathname === "/";
  return (
      <>
          <BreadCrumb title={"Contact"} />
          <div className="container mx-auto flex justify-center items-center mt-[5%] ">
              <Title title={"Get In Touch"} subtitle={"If You Have Any Query, Please Contact Us"} className={"justify-center items-center w-full md:w-[60%]"} classText={"text-center text-3xl md:text-5xl"} />
          </div>
          <ContactForm />
          { !isHome && <Footer/>}
      </>
  );
}

export default Contact
