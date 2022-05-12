import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";

const SmNavBar = () => {
  return (
    <div className="fixed md:hidden z-10 w-full h-14 bg-gray-50 shadow-xl border-b pb-2 flex flex-row items-center justify-between">
        <div className="w-44 border border-gray-100 shadow-xl mt-4">
          <img src="https://oralpath.sriher.com//resources/assets/images/NewSRIHER-01_new1.png" alt="Logo" className="w-full h-full"/>
        </div>        
        <div className=" mr-4">
            <GiHamburgerMenu />
        </div>
      </div>
  )
}

export default SmNavBar;