import React from "react";
import Navbar from "../../layouts/Navbar";

const BreadCrumb = ({ title }) => {
    const isHome = location.pathname === "/";
    return (
        <>
            {!isHome && (
                <>
                    <Navbar />
                    <section className="w-full -mt-[5rem] -z-1 h-[50vh] bg-[#D5B981] flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-5xl font-bold text-[#1d2434] ">{title}</h1>
                        <div className="flex gap-2">
                            <h1 className="text-xl  text-[#1d2434] ">Home</h1>
                            <p className="text-xl text-[#1d2434]">/</p>
                            <h1 className="text-xl  text-[#1d2434] ">{title}</h1>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default BreadCrumb;
