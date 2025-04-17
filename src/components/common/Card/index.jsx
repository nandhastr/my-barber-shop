import React from 'react'

const Card = ({urlImg, title, desc, classNameCard,classNameBorderFrame, classNameImg, classNameTitle, sizeTitle}) => {
  return (
      <>
          <div className={` ${classNameCard} group`}>
              <div className={` relative h-fit w-fit`}>
                  <img src={`${urlImg}`} className={`${classNameImg}`} alt="" />
                  <div className={`bg-transparent absolute top-4 left-4 right-4 bottom-4 border border-white w-auto h-auto  group-hover:border-[#D5B981] transition-all duration-300 ease-in-out ${classNameBorderFrame}`}></div>
              </div>
              <div className={`flex justify-center items-center text-center ${classNameTitle} `}>
                  <h1 className={`text-[#1d2434] font-semibold ${sizeTitle}`}>{title}</h1>
                  <p>{desc}</p>
              </div>
          </div>
      </>
  );
}

export default Card;
