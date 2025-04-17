import React from 'react'
import OurServices from '../../features/services/OurServices';
import Title from '../../components/common/Title';
import BtnLearnMore from '../../components/common/BtnLearnMore';
import BreadCrumb from '../../components/common/BreadCrumb';
import Footer from '../../components/layouts/Footer';

const About = () => {
    const isHome = location.pathname === "/";
  return (
      <>
          <BreadCrumb title={"About Us"} />
          <section className="mt-[5%] mb-[5%]">
              <div className="container px-4 mx-auto flex flex-col md:grid md:grid-cols-2 space-x-4">
                  <div className="h-auto  w-full relative">
                      <div className=" bg-[#1d2434] h-[20rem] w-full md:h-[30rem] md:w-[25rem]"></div>
                      <div className=" h-[20rem] w-full md:h-[30rem] md:w-[25rem] absolute  top-8 left-8 md:top-14 md:left-14">
                          <img src="/image/barber/about-img.jpg" className="object-cover  w-auto h-full md:w-full" alt="About" />
                      </div>
                      <div className=" h-[20rem] w-full md:h-[30rem] md:w-[25rem] absolute border-[#fff] border-1 top-5 md:top-8 left-4 md:left-8"></div>
                  </div>
                  <div className=" w-full flex flex-col gap-4 mt-[25%] md:mt-[10%]">
                      <Title title={"Learn About Us"} subtitle={"25 Years Experience"} classText={"text-3xl md:text-5xl"} />
                      <div className="flex flex-col gap-4">
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi saepe architecto numquam et illo odio accusamus nesciunt. Aliquam asperiores voluptatibus in velit unde laborum obcaecati. Sequi quas repellat rem fugit nostrum expedita ducimus et, quibusdam,
                              ut repellendus quo.
                          </p>
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi saepe architecto numquam et illo odio accusamus nesciunt. Aliquam asperiores voluptatibus in velit unde laborum obcaecati. Sequi quas repellat rem fugit nostrum expedita ducimus et, quibusdam,
                              ut repellendus quo.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
          <OurServices />
          {!isHome && <Footer />}
      </>
  );
}

export default About
