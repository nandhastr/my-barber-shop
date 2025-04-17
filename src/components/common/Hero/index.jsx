import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import BtnLearnMore from "../BtnLearnMore";

const Hero = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            
            <section className="w-full -mt-[5rem] -z-1 h-[91vh] bg-[#D5B981]">
                <div className="md:grid md:grid-cols-[2.4fr_1.7fr] w-full relative">
                    <div className="bg-[#D5B981]  flex flex-col gap-4 pt-[50%] md:pt-[25%] pl-[15%]">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1d2434]">Barber Shop</h1>
                        <p className="text-[#1d2434]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur culpa est deleniti necessitatibus ducimus deserunt iure velit numquam quod!</p>
                        <BtnLearnMore className={"px-5 py-3 border-2  border-[#1d2434] text-[#1d2434] w-fit hover:bg-[#1d2434] hover:text-[#D5B981]"} text={"Pesan Sekarang"} />
                    </div>
                    <div className="hidden md:block h-[150%]  rounded-bl-[80%] rounded-br-[50%] rounded-tl-[50%] overflow-hidden">
                        <img src="/image/barber/hero-img.jpg" className="object-cover w-full h-full" alt="Hero" />
                    </div>

                    {/* Tombol play dengan efek pulse */}
                    <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 flex items-center justify-center hover:cursor-pointer" onClick={handleClick}>
                        <span className="absolute inline-flex h-[60px] w-[60px] rounded-full bg-[#1d2434] opacity-75 animate-ping"></span>
                        <FontAwesomeIcon icon={faCirclePlay} className="text-7xl text-[#1d2434]" />
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className={`
            fixed inset-0 bg-black/50 z-40 transition-opacity duration-500
            ${openModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
                ></div>

                {/* Modal */}
                <div
                    className={`
            fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white h-[70%] w-[60%] z-50 rounded-lg shadow-xl
            transition-all duration-500 ease-in-out
            ${openModal ? "top-1/2 opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
          `}
                >
                    <FontAwesomeIcon icon={faXmark} className="absolute top-4 right-4 text-2xl text-gray-700 hover:cursor-pointer" onClick={handleClose} />
                    <div className="p-6 text-center border">
                        <h2 className="text-xl font-bold text-[#1d2434]">Modal</h2>
                        <p className="text-sm text-[#1d2434] mt-2">Untuk menampilkan gambar atau video</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
