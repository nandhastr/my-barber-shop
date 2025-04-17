import React from 'react'

const Title = ({title, subtitle, classText, className}) => {
  return (
      <div className={`flex flex-col gap-2 ${className}`}>
          <h1>{title}</h1>
          <h1 className={`font-semibold text-[#1d2434] ${classText} `}>{subtitle}</h1>
      </div>
  );
}

export default Title
