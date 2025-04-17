import React from "react";
import Title from "../../components/common/Title";
import Card from "../../components/common/Card";
import BreadCrumb from './../../components/common/BreadCrumb/index';
import Footer from "../../components/layouts/Footer";

const Price = () => {
    const isHome = location.pathname === "/"
    const priceList = [
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
        {
            title: "Hair Cut",
            desc: "$9.99",
            urlImg: "/image/barber/serives-img.jpg"
        },
    ]

    return (
        <>
            <BreadCrumb title={"Price"} />
            <section className="mt-[10%] md:mt-[5%] mb-[5%]">
                <div className="container px-4  mx-auto flex flex-col justify-center items-center mb-[5%]">
                    <Title title={"Our Best Pricing"} subtitle={"We Provide Best Price in the City"} className={"justify-center items-center w-full md:w-[60%]"} classText={"text-center text-3xl md:text-5xl"} />
                </div>
                <div className="container px-4 mx-auto flex flex-col md:grid md:grid-cols-4 gap-6">
                    {priceList.map((item, index) => (    
                        <Card
                            key={index}
                        urlImg={item.urlImg}
                        title={item.title}
                        desc={item.desc}
                        classNameCard={"flex gap-4 h-full md:h-fit bg-[#5e5e5e11] hover:bg-[#D5B981] transition-all duration-300 ease-in-out"}
                        classNameImg={"object-cover w-[8rem] h-[6rem]"}
                        classNameTitle={"flex-col  "}
                        sizeTitle={"text-sm"}
                    />
                    ))}
                </div>
            </section>
            {!isHome && <Footer/>}
        </>
    );
};

export default Price;
