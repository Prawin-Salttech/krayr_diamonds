"use client";

import { useState } from "react";

const WhiteButtonSecondary = ({ children }) => {

    const [isHovered,setIsHovered] = useState(false)
    return (
      <button
        className="w-[300px] h-[48px] relative text-white outline-none flex flex-row items-center justify-center py-3 px-0 text-left text-[16px] text-gray font-montserrat font-semibold  hover:bg-white hover:text-black transition-all duration-300 border hover:border-white"
        type="button" // or "submit" if it's in a form
        style={{
            background: isHovered ? 'white' : 'linear-gradient(transparent, transparent)', // Background gradient
            color: isHovered ? 'black' : 'white', // Text color on hover
            border: '1px solid white',
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
        <span className="relative leading-[24px] hover:bg-opacity-0">
          {children}
        </span>
      </button>
    );
  };
  
  export default WhiteButtonSecondary;
  