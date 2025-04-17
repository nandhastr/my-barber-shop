import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Carousel = () => {
    const scrollRef = useRef(null);
    const scrollAmount = 230;

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: -scrollAmount,
                behavior: "smooth",
            })
        }
    }
    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: scrollAmount,
                behavior: "smooth",
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const scrollContainer = scrollRef.current;
            if (scrollContainer) {
                const isBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight;

                if (isBottom) {
                    scrollContainer.scrollBy({
                        top: 0,
                        behavior: "smooth"
                    });
                } else {
                    scrollContainer.scrollBy({
                        top: scrollAmount,
                        behavior: "smooth"
                    });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [])
    return (
        <>
            <div className="container mx-auto flex flex-col gap-4 translate-y-1/2">
                <div ref={scrollRef} className="testi-scrollbar  max-h-[14rem] flex flex-col gap-4 justify-center items-start  mb-2 overflow-y-auto px-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <img src="/image/barber/testi-img.jpg" className={`w-15 h-15 rounded-full object-cover`} alt="" />
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque sit fugiat tempora aut eius eos. Eveniet quae officiis itaque dolorum expedita vitae dolores nemo iste voluptas culpa dolore quia doloribus nostrum, quod asperiores dolorem velit quas sint esse
                                consequuntur ad eum facere? Porro, nulla. Soluta quis eveniet labore molestiae?
                            </p>
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="font-semibold  text-lg text-[#D5B981]">Client Name</h3>
                            <p className="text-white">Profession</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <img src="/image/barber/testi-img.jpg" className={`w-15 h-15 rounded-full object-cover`} alt="" />
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque sit fugiat tempora aut eius eos. Eveniet quae officiis itaque dolorum expedita vitae dolores nemo iste voluptas culpa dolore quia doloribus nostrum, quod asperiores dolorem velit quas sint esse
                                consequuntur ad eum facere? Porro, nulla. Soluta quis eveniet labore molestiae?
                            </p>
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="font-semibold  text-lg text-[#D5B981]">Client Name</h3>
                            <p className="text-white">Profession</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <img src="/image/barber/testi-img.jpg" className={`w-15 h-15 rounded-full object-cover`} alt="" />
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque sit fugiat tempora aut eius eos. Eveniet quae officiis itaque dolorum expedita vitae dolores nemo iste voluptas culpa dolore quia doloribus nostrum, quod asperiores dolorem velit quas sint esse
                                consequuntur ad eum facere? Porro, nulla. Soluta quis eveniet labore molestiae?
                            </p>
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="font-semibold  text-lg text-[#D5B981]">Client Name</h3>
                            <p className="text-white">Profession</p>
                        </div>
                    </div>
                   
                </div>

                <div className=" flex gap-4  bottom-2 px-4">
                    <div
                        onClick={scrollDown}
                        className="py-4 px-6  w-fit bg-[#1d2434] hover:bg-[#D5B981] hover:text-[#1d2434]  text-[#D5B981]  transition-all duration-300 ease-in-out hover:cursor-pointer">
                        <FontAwesomeIcon icon={faChevronLeft} className="font-bold" />
                    </div>
                    <div
                        onClick={scrollUp}
                        className="py-4 px-6  w-fit bg-[#1d2434] hover:bg-[#D5B981] hover:text-[#1d2434]  text-[#D5B981]  transition-all duration-300 ease-in-out hover:cursor-pointer">
                        <FontAwesomeIcon icon={faChevronRight} className="font-bold" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
