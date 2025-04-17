import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import BtnToUp from './../../common/btnScrollToUp/index';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

const Footer = () => {

    const navigate = useNavigate();

    const itemMenuFooter = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "/about"
        },
        {
            title: "Services",
            url: "/services"
        },
        {
            title: "Price",
            url: "/price"
        },
        {
            title: "Barber",
            url: "/barber"
        },
        {
            title: "Gallery",
            url: "/gallery"
        },
        {
            title: "Blog Page",
            url: "/blog-page"
        },
        {
            title: "Single Page",
            url: "/single-page"
        },
        {
            title: "Contact",
            url: "/contact"
        },
    ]
  return (
      <>
          <section className="bg-[#1d2434] pb-20 relative">
              <div className="container mx-auto px-4 flex flex-col  md:grid md:grid-cols-3 gap-4 py-10  ">
                  <div className="flex flex-col gap-4 mt-[4%] md:mt-0">
                      <h1 className="font-bold text-[#D5B981] text-xl">Address</h1>
                      <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faLocationDot} />
                          <p>Lorem ipsum dolor sit amet</p>
                      </div>
                      <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faPhone} />
                          <p>+628978957</p>
                      </div>
                      <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <p>xample@gmal.com</p>
                      </div>
                      <div className="flex gap-4 items-center">
                          <a href="" className="underline-none hover:cursor-pointer text-[#D5B981] font-bold text-xl">
                              <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a href="" className="underline-none hover:cursor-pointer text-[#D5B981] font-bold text-xl">
                              <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a href="" className="underline-none hover:cursor-pointer text-[#D5B981] font-bold text-xl">
                              <FontAwesomeIcon icon={faTiktok} />
                          </a>
                          <a href="" className="underline-none hover:cursor-pointer text-[#D5B981] font-bold text-xl">
                              <FontAwesomeIcon icon={faYoutube} />
                          </a>
                      </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-[4%] md:mt-0 ">
                      <h1 className="font-bold text-[#D5B981] text-xl">Quick Links</h1>
                      <div className="grid grid-cols-2 gap-4">
                          {itemMenuFooter.map((item, index) => (
                              <a key={index}className="underline-none hover:cursor-pointer origin-left  hover:scale-x-110 text-[#D5B981] flex gap-2 items-center transition-all duration-300 ease-in-out" onClick={() => navigate(item.url)}>
                                  <FontAwesomeIcon icon={faChevronRight} />
                                  <p>{item.title}</p>
                              </a>
                          ))}
                      </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-[4%] md:mt-0 ">
                      <h1 className="font-bold text-[#D5B981] text-xl">NewsLetter</h1>
                      <div className="flex flex-col gap-4">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum laborum, nemo iure tempore dolor? Suscipit voluptatum similique non delectus?</p>
                          <div className="flex bg-white w-full p-4">
                              <input type="text" placeholder="Enter your email" className="w-full border-none outline-none bg-white" />
                              <button className="border border-[#1d2434] text-[#1d2434] hover:text-[#D5B981] hover:border-[#D5B981] px-4 py-2 transition-all duration-300 ease-in-out">Send</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-full h-auto py-4 px-4">
                  <p className="text-[#1d2434] text-center">Copyright Nanda-techD@2025 All Right Reserved</p>
              </div>
              <BtnToUp />
          </section>
      </>
  );
}

export default Footer;
