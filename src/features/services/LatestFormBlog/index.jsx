import React, { useRef, useState } from "react";
import Title from "../../../components/common/Title";
import Card from "../../../components/common/Card";
import BtnLearnMore from "../../../components/common/BtnLearnMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faCalendarCheck, faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";

const LatestBlog = () => {
    const scrollRef = useRef(null);
    const location = useLocation();

    const isBlogPage = location.pathname === "/blog-page";

    // fungsi scroll
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };

    const latesBlog = [
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
        {
            urlImg: "/image/barber/testi-img.jpg",
            servicesName: "layanan 1",
            tglUpload: "10-10-2025",
        },
    ];

    // fungsi navigasi halaman
    const itemPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(latesBlog.length / itemPerPage);

    const PaginationBlog = latesBlog.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPage) {
            setCurrentPage(page);
        }
    }

    return (
        <>
            <section className="mt-[5%] mb-[5%]">
                <div className="container mx-auto flex justify-center items-center mb-[5%]">
                    <Title title={"Latest From Blog"} subtitle={"Learn More from Latest Barber Blog"} className={"justify-center items-center w-[60%]"} positionText={"text-center"} />
                </div>

                <div ref={scrollRef} className={`container px-4 mx-auto w-full ${isBlogPage ? "overflow-x-hidden" : "overflow-x-auto"} testi-scrollbar mb-8`}>
                    <div className={`${isBlogPage ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4" : "flex gap-6 px-4 w-max"}`}>
                        {PaginationBlog.map((item, index) => (
                            <div key={index} className="px-4 flex-shrink-0 w-[370px] sm:w-[350px] md:w-[320px] bg-[#5e5e5e11]">
                                <Card urlImg={item.urlImg} title={""} desc={""} classNameCard="flex flex-col gap-4 h-auto" classNameImg="object-cover w-full h-full" classNameTitle="flex-col px-4" sizeTitle="text-2xl" />
                                <div className="flex flex-col gap-2 px-4 pb-4">
                                    <div className="flex gap-2 text-gray-600 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBookBookmark} className="text-[0.8rem]" />
                                            <h2>{item.servicesName}</h2>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="text-[0.8rem]" />
                                            <h2>{item.tglUpload}</h2>
                                        </div>
                                    </div>
                                    <h1 className="font-bold text-[#1d2434]">Lorem ipsum dolor sit.</h1>
                                    <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam quaerat fuga eos, vitae at?</p>
                                    <BtnLearnMore className="text-[#1d2434] font-bold text-sm hover:text-[#D5B981]" text="READ MORE >" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {!isBlogPage && (
                    <div className="container mx-auto flex justify-center items-center gap-4">
                        <div className=" flex gap-4  bottom-2 px-4">
                            <div onClick={scrollLeft} className="py-4 px-6  w-fit bg-[#1d2434] hover:bg-[#D5B981] hover:text-[#1d2434]  text-[#D5B981]  transition-all duration-300 ease-in-out hover:cursor-pointer">
                                <FontAwesomeIcon icon={faChevronLeft} className="font-bold" />
                            </div>
                            <div onClick={scrollRight} className="py-4 px-6  w-fit bg-[#1d2434] hover:bg-[#D5B981] hover:text-[#1d2434]  text-[#D5B981]  transition-all duration-300 ease-in-out hover:cursor-pointer">
                                <FontAwesomeIcon icon={faChevronRight} className="font-bold" />
                            </div>
                        </div>
                    </div>
                )}
                {isBlogPage && (
                    //  btn navigasi
                    <div className="flex justify-center items-center  mb-10 mt-6">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 ${currentPage === 1 ? "hover:cursor-not-allowed" : "hover:cursor-pointer"} bg-[#1d2434] text-[#D5B981] disabled:bg-gray-300 flex justify-center items-center gap-1 text-center`}
                        >
                            <div className="flex -space-x-1">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            Prev
                        </button>
                        {Array.from({ length: totalPage }, (__, i) => (
                            <button
                                onClick={() => goToPage(i + 1)}
                                className={`
                                    ${currentPage === i + 1 ? "bg-[#1d2434] text-[#1d2434]" : "bg-gray-300 text-[#D5B981]"}
                                    px-4 py-2 hover:cursor-pointer bg-transparent border  `}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPage}
                            className={`px-4 py-2 ${currentPage === 1 ? "hover:cursor-pointer" : "hover:cursor-not-allowed"} bg-[#1d2434] text-[#D5B981] disabled:bg-gray-300 flex justify-center items-center gap-1 text-center`}
                        >
                            Next
                            <div className="flex -space-x-1">
                                <FontAwesomeIcon icon={faChevronRight} />
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </button>
                    </div>
                )}
            </section>
        </>
    );
};

export default LatestBlog;
