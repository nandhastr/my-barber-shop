import React from "react";
import BreadCrumb from "./../../components/common/BreadCrumb/index";
import Title from "./../../components/common/Title/index";
import Footer from './../../components/layouts/Footer/index';
import LineHead from "../../components/common/LineHead";

const SinglePage = () => {
    return (
        <>
            <BreadCrumb title={"Single Page"} />
            <section className="mt-[5%] mb-[5%]">
                <div className="container px-4 mx-auto flex flex-col justify-center items-center">
                    <Title title={"Single Page"} subtitle={"Best Salon and Barber Service For You"} className={"justify-center items-center w-full md:w-[60%]"} classText={"text-center text-3xl md:text-5xl"} />
                    <img src="/image/barber/serives-img.jpg" alt="" className="w-full mt-[5%]" />
                </div>
          <LineHead colorText={"text-[#1d2434]"} title={ "Hair Cut"} />
                <div className="container px-4 flex flex-col md:grid md:grid-cols-2 gap-2 mx-auto  mt-10 justify-center ">
                    <div className="w-full ">
                        <img src="/image/barber/about-img.jpg" className="w-[90%] h-[90%] object-cover origin-bottom hover:scale-y-105 transition-all duration-300 ease-in-out" alt="" />
                    </div>
                    <div className="w-full flex flex-col gap-8 mt-[5%] md:mt-0">
                        <div className="flex flex-col gap-4 ">
                            <h1 className="text-4xl font-bold text-[#1d2434]">Lorem ipsum dolor sit amet.</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit fugit. Illum perspiciatis porro beatae minus ipsam qui similique corrupti provident cupiditate consequatur architecto distinctio sint, amet quasi quis hic facilis molestias? Officiis neque
                                animi velit maiores commodi cum vel sunt sapiente similique beatae ipsum architecto quo, numquam doloremque sint?
                            </p>
                        </div>
                        <div className=" flex justify-around bottom-0">
                            <div className="flex flex-col gap-2 justify-center items-center ">
                                <h1 className="text-4xl font-bold">1000+</h1>
                                <p>Clients</p>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center ">
                                <h1 className="text-4xl font-bold">5 +</h1>
                                <p>Years Experience</p>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center ">
                                <h1 className="text-4xl font-bold">100 +</h1>
                                <p>Professionals</p>
                            </div>
                        </div>
                    </div>
          </div>
          <LineHead colorText={"text-[#1d2434]"} title={ "Blog"} />
                <div className="container px-4 mx-auto mt-[5%]">
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-3xl font-bold text-[#1d2434]">Lorem ipsum dolor sit amet.</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit fugit. Illum perspiciatis porro beatae minus ipsam qui similique corrupti provident cupiditate consequatur architecto distinctio sint, amet quasi quis hic facilis molestias? Officiis neque animi
                            velit maiores commodi cum vel sunt sapiente similique beatae ipsum architecto quo, numquam doloremque sint?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit fugit. Illum perspiciatis porro beatae minus ipsam qui similique corrupti provident cupiditate consequatur architecto distinctio sint, amet quasi quis hic facilis molestias? Officiis neque animi
                            velit maiores commodi cum vel sunt sapiente similique beatae ipsum architecto quo, numquam doloremque sint?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit fugit. Illum perspiciatis porro beatae minus ipsam qui similique corrupti provident cupiditate consequatur architecto distinctio sint, amet quasi quis hic facilis molestias? Officiis neque animi
                            velit maiores commodi cum vel sunt sapiente similique beatae ipsum architecto quo, numquam doloremque sint?
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SinglePage;
