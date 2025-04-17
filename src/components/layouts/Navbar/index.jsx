import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import NavSticky from './NavSticky';

const Navbar = () => {
  return (
      <>
      <nav className="bg-[#1d2434] w-full auto hidden md:block ">
        <div className="container flex mx-auto justify-between items-center h-full ">
          <div className="flex">
            <div className="border-l border-r px-4 py-2 flex flex-col justify-center items-center text-[#fff]">
              <p>8:00 - 9:00</p>
              <p className="text-sm">Opening Every Day</p>
            </div>
            <div className=" border-r px-4 py-2 flex flex-col justify-center items-center text-[#fff]">
              <p>+62 857736xxxx</p>
              <p className="text-sm">Call us For Booking</p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l   px-4 py-4 flex flex-col justify-center items-center text-[#fff]">
             <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </div>
            
            <div className="border-l  px-4 flex flex-col justify-center items-center text-[#fff]">
             <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </div>
            <div className="border-l  px-4 flex flex-col justify-center items-center text-[#fff]">
             <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </div>
            <div className="border-l px-4 flex flex-col justify-center items-center text-[#fff]">
             <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </div>
            <div className="border-l border-r px-4 flex flex-col justify-center items-center text-[#fff]">
             <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </div>
            
          </div>
        </div>
      </nav>
      <NavSticky />
      </>
  );
}

export default Navbar;
