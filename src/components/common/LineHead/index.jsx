import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const LineHead = ({title, colorText}) => {
  return (
      <div className="container grid grid-cols-[2fr_1fr_2fr]  mx-auto  mt-10 justify-center items-center">
          <hr className={`border-1 w-full ${colorText}`}/>
          <h1 className={`text-2xl font-bold ${colorText} text-center flex justify-center items-center gap-1 border-t-2 border-b-2`}>
              <FontAwesomeIcon icon={faStar} className="text-[#D5B981] text-[0.7rem]" />
              <FontAwesomeIcon icon={faStar} className="text-[#D5B981] text-[1rem]" />
              {title}
              <FontAwesomeIcon icon={faStar} className="text-[#D5B981] text-[1rem]" />
              <FontAwesomeIcon icon={faStar} className="text-[#D5B981] text-[0.7rem]" />
          </h1>
          <hr className={`border-1  w-full ${colorText}`} />
      </div>
  );
}

export default LineHead
