import BreadCrumb from "./../../components/common/BreadCrumb/index";
import Card from "../../components/common/Card";
import Footer from "./../../components/layouts/Footer/index";
import { useState } from "react";

const Galery = () => {
    const data = [
        {
            category: "Hair Cut",
            urlImg: "/image/barber/testi-img.jpg",
        },
        {
            category: "Hair Cut",
            urlImg: "/image/barber/hero-img.jpg",
        },
        {
            category: "Hair Cut",
            urlImg: "/image/barber/serives-img.jpg",
        },
        {
            category: "Color & Wash",
            urlImg: "/image/barber/testi-img.jpg",
        },
        {
            category: "Color & Wash",
            urlImg: "/image/barber/hero-img.jpg",
        },
        {
            category: "Color & Wash",
            urlImg: "/image/barber/hero-img.jpg",
        },
    ];

    const [filterData, setFilterData] = useState(data);
    const [activeCategory, setaciveCategory] = useState("All");

    const handleFilter = (category) => {
      setaciveCategory(category);
    if (category === "All") {
      setFilterData(data);
    } else {
      setFilterData(data.filter(item=>item.category === category))
      }
    }

    return (
        <>
            <BreadCrumb title={"Gallery"} />
            <section className="mt-[5%] mb-[5%]">
                <div className="container px-4 mx-auto flex justify-center items-center text-center">
                    <div className="space-x-2 space-y-2 md:space-x-0 md:space-y-0 md:flex gap-2">
                        {["All", "Hair Cut", "Color & Wash"].map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => handleFilter(cat)}
                                className={`border-2 border-[#1d2434] text-[#1d2434] ${activeCategory === cat ? "bg-[#1d2434] text-[#D5B981]" : ""} hover:bg-[#1d2434] hover:text-[#D5B981] bg-trasnfarent px-6 w-auto h-auto transition-all duration-300 ease-in-out`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="container px-4 mx-auto flex justify-center items-center mt-[5%]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filterData.map((item, index) => (
                            <Card key={index} urlImg={item.urlImg} classNameImg={"w-[20rem] h-[15rem] object-cover origin-bottom group-hover:scale-y-105 transition-all duration-400 ease-in-out"} classNameBorderFrame={"origin-bottom group-hover:scale-y-105"} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Galery;
