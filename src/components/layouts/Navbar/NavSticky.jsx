import { faAngleUp, faSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import LineHead from "./../../common/LineHead/index";

const NavSticky = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScroll, setIsScroll] = useState(false);
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const [openSubMenuModal, setOpenSubMenuModal] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleOpenMenuModal = () => {
        setOpenMenuModal(!openMenuModal);
    };
    const handleCloseMenuModal = () => {
        setOpenMenuModal(!openMenuModal);
    };

    const handleSubMenuModal = () => { 
        setOpenSubMenuModal(!openSubMenuModal);
     }

    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Price",
            path: "/price",
        },
        {
            name: "Barber",
            path: "/barber",
        },
        {
            name: "Gallery",
            path: "/gallery",
        },
    ];
    return (
        <>
            <nav className={`${isScroll ? "bg-[#1d2434] shadow-md" : "bg-[#645c4b3f] py-4 "}  w-full h-auto sticky top-0 transition-all duration-500 ease-in-out z-2`}>
                <div className="container relative flex px-4 md:px-0 mx-auto justify-between items-center h-full ">
                    <h1 className="font-semibold text-xl md:text-5xl text-[#fff]">Barber</h1>
                    <ul className=" gap-2  items-end h-full hidden md:flex">
                        {navItems.map((item, index) => (
                            <li key={index} className={` text-[0.9rem] hover:cursor-pointer px-2 py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out ${location.pathname === item.path ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate(item.path)}>
                                {item.name}
                            </li>
                        ))}

                        <li className=" py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out relative group">
                            <div className="flex justify-center items-center gap-1 cursor-pointer">
                                <span className="group-hover  text-[0.9rem] hover:cursor-pointer">Pages</span>
                                <FontAwesomeIcon icon={faAngleUp} className="text-[0.9rem] hover:cursor-pointer ml-1 group-hover:rotate-180 transform  transition-transfrom duration-500 ease-in-out" />
                            </div>
                            <ul
                                className="absolute  left-0  w-[10rem] h-auto py-4 px-4 space-y-2 
                   bg-white text-[#000] rounded shadow-lg 
                   opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
                   transform origin-top transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto"
                            >
                                <li className={`px-2 text-sm hover:cursor-pointer ${location.pathname === "/blog-page" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/blog-page")}>
                                    Blog Page
                                </li>
                                <li className={`px-2 text-sm hover:cursor-pointer ${location.pathname === "/single-page" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/single-page")}>
                                    Single Blog{" "}
                                </li>
                            </ul>
                        </li>
                        <li className={`px-2 text-[0.9rem] hover:cursor-pointer  py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out ${location.pathname === "/contact" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/contact")}>
                            Contact
                        </li>
                    </ul>
                    <div className="flex sm:hidden flex-col -space-y-2 hover:-space-y-4 hover:cursor-pointer justify-center items-center group " onClick={handleOpenMenuModal}>
                        <FontAwesomeIcon icon={faSlash} className="text-[#fff]  font-bold transform -rotate-39 transition-all duration-500 ease-in-out group-hover:rotate-10" />
                        <FontAwesomeIcon icon={faSlash} className="text-[#fff]  font-bold transform -rotate-39 transition-all duration-500 ease-in-out group-hover:opacity-0" />
                        <FontAwesomeIcon icon={faSlash} className="text-[#fff]  font-bold transform -rotate-39 transition-all duration-500 ease-in-out group-hover:-rotate-85" />
                    </div>
                </div>

                <div
                    className={`
                          fixed inset-0 bg-black/50 z-40 transition-opacity duration-500
                          ${openMenuModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                        `}
                ></div>

                {/* Modal */}
                <div
                    className={`
                          fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                          bg-[#1d2434] h-auto w-[50%] z-50 rounded-lg shadow-xl
                          transition-all duration-500 ease-in-out
                          ${openMenuModal ? "top-1/2 opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
                        `}
                >
                    <FontAwesomeIcon icon={faXmark} className="absolute top-4 right-4 text-2xl text-gray-700 hover:cursor-pointer" onClick={handleCloseMenuModal} />
                    <div className="p-6 text-start flex flex-col gap-6 ">
                        <LineHead title={"Menu"} colorText={"text-[#fff]"} />
                        <ul className=" gap-2 flex flex-col h-full">
                            {navItems.map((item, index) => (
                                <li key={index} className={` text-[0.9rem] hover:cursor-pointer px-2 py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out ${location.pathname === item.path ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate(item.path)}>
                                    {item.name}
                                </li>
                            ))}
                            <li className="px-2 py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out  group relative">
                                <div className="flex  items-center gap-1 cursor-pointer" onClick={handleSubMenuModal}>
                                    <span className="group-hover  text-[0.9rem] hover:cursor-pointer">Pages</span>
                                    <FontAwesomeIcon icon={faAngleUp} className="text-[0.9rem] ml-1 transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
                                </div>

                                <ul
                                    className={`absolute  left-7  w-[10rem] h-auto py-4 px-4 space-y-2 
                   bg-[white] text-[#000] rounded shadow-lg 
                   opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 
                   transform origin-top transition-all duration-300 ease-in-out
                   ${openSubMenuModal ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}
                   `}
                                >
                                    <li className={`px-2 text-sm hover:cursor-pointer ${location.pathname === "/blog-page" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/blog-page")}>
                                        Blog Page
                                    </li>
                                    <li className={`px-2 text-sm hover:cursor-pointer ${location.pathname === "/single-page" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/single-page")}>
                                        Single Blog{" "}
                                    </li>
                                </ul>
                            </li>

                            <li className={`px-2 text-[0.9rem] hover:cursor-pointer  py-1 text-[#fff] uppercase hover:bg-[#d5b98125] transition-all duration-300 ease-in-out ${location.pathname === "/contact" ? "bg-[#d5b98125]" : ""}`} onClick={() => navigate("/contact")}>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavSticky;
