import React from 'react'
import Title from './../../../components/common/Title/index';
import Card from './../../../components/common/Card/index';

const OurTeam = () => {
    const teamList = [
        {
            title: "Adam",
            desc: "master barner",
            urlImg: "/image/barber/about-img.jpg"
        },
        {
            title: "Adam",
            desc: "master barner",
            urlImg: "/image/barber/about-img.jpg"
        },
        {
            title: "Adam",
            desc: "master barner",
            urlImg: "/image/barber/about-img.jpg"
        },
        {
            title: "Adam",
            desc: "master barner",
            urlImg: "/image/barber/about-img.jpg"
        },
    ]
  return (
      <>
          <section className="mt-[10%] md:mt-[5%] mb-[5%]">
              <div className="container px-4 mx-auto flex justify-center items-center mb-[5%]">
                  <Title title={"Our Salon Services"} subtitle={"Best Salon and Barber Service For You"} className={"justify-center items-center w-full  md:w-[60%]"} classText={"text-center text-3xl md:text-5xl"} />
              </div>
              <div className="container px-4 mx-auto w-full flex flex-col gap-20 md:grid md:grid-cols-4 md:gap-6 mb-[10%]">
                  {teamList.map((item, index) => (
                      <Card
                          key={index}
                          urlImg={item.urlImg}
                          title={item.title}
                          desc={item.desc}
                          classNameCard={"flex flex-col justify-center items-center gap-4 h-auto bg-[#5e5e5e11] relative"}
                          classNameImg={"object-cover w-full h-[20rem]"}
                          classNameTitle={"flex-col  px-4 absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white w-[86.5%] h-[35%] group-hover:bg-[#D5B981] transition-all duration-300 ease-in-out"}
                          sizeTitle={"text-xl"}
                      />
                  ))}
              </div>
          </section>
      </>
  );
}

export default OurTeam;
