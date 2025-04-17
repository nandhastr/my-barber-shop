import React from 'react'
import BtnLearnMore from '../../../components/common/BtnLearnMore';

const ContactForm = () => {
  return (
      <>
          <section className="mt-[20%] mb-[20%] md:mt-[5%] md:mb-[5%] bg-[#1d2434] ">
              <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr]">
                  <img src="/image/barber/about-img.jpg" alt="About" className="w-full h-full hidden md:block object-cover" />
                  <div className="flex flex-col space-y-4 px-8 py-10 md:py-0 md:translate-y-[20%]">
                      <form className="w-full md:pr-[10rem] flex flex-col gap-6">
                          <input type="text" className="border-b-2 border-[#D5B981] w-full bg-transparent text-white  focus:outline-none" placeholder="Your Name" />
                          <input type="text" className="border-b-2 border-[#D5B981] w-full bg-transparent text-white  focus:outline-none" placeholder="Your Email" />
                          <input type="text" className="border-b-2 border-[#D5B981] w-full bg-transparent text-white  focus:outline-none" placeholder="Subject" />
                          <textarea className="border-b-2 border-[#D5B981] w-full bg-transparent text-white  focus:outline-none" placeholder="Message" rows={4}></textarea>
                          <BtnLearnMore className="px-6 py-4 border-2 border-[#D5B981] text-[#D5B981] w-fit hover:bg-[#D5B981] hover:text-[#1d2434]" text="Send Message" />
                      </form>
                  </div>
              </div>
          </section>
      </>
  );
}

export default ContactForm;
