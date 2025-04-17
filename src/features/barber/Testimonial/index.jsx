import React from 'react'
import Carousel from '../../../components/common/Carousel';

const Testimonial = () => {
  return (
      <>
          <section className="relative mb-[5%]">
              <div className=" inset-0 bg-[url('/image/barber/testi-img.jpg')] h-[90vh] w-full bg-cover bg-center bg-no-repeat"></div>
              <div className="absolute inset-0 bg-[#1d2434]/80 h-[90vh] w-full bg-cover bg-center bg-no-repeat py-4">
              
                  <Carousel/>
                    
                 
              </div>
          </section>
      </>
  );
}

export default Testimonial;
