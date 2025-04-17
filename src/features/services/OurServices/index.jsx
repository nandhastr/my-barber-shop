import React from "react";
import Title from "../../../components/common/Title";
import Card from "../../../components/common/Card";
import BtnLearnMore from './../../../components/common/BtnLearnMore';

const OurServices = () => {
    const servicesList = [
        {
            title: "Hair Cut",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia fugiat eum, officia odio expedita exercitationem.",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia fugiat eum, officia odio expedita exercitationem.",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia fugiat eum, officia odio expedita exercitationem.",
            urlImg: "/image/barber/serives-img.jpg"
        },
    ]
    return (
        <>
            <section className="mt-[10%] md:mt-[5%] mb-[5%]">
                <div className="container mx-auto flex flex-col gap-4 justify-center items-center mb-[5%]">
                    <Title title={"Our Salon Services"} subtitle={"Best Salon and Barber Service For You"} className={"justify-center items-center w-full md:w-[60%]"} classText={"text-center text-3xl md:text-5xl"} />
                </div>
                <div className="container px-4 mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 ">
                    {servicesList.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center relative">
                            <Card urlImg={item.urlImg} title={item.title} desc={item.desc} classNameCard={"flex flex-col gap-4 h-[25rem] bg-[#5e5e5e11]"} classNameImg={"object-cover w-full h-full"} classNameTitle={"flex-col  px-4"} sizeTitle={"text-2xl"} />
                            <BtnLearnMore text={"Learn More"} className={"px-4 py-2 absolute bottom-2 border-2 border-[#1d2434] text-[#1d2434] w-fit hover:bg-[#1d2434] hover:text-[#D5B981]"} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurServices;
