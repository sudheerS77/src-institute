import React, { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link, useParams } from "react-router-dom";

const SmNavBar = () => {
  const { type } = useParams();

  const [ isDropDownOpen, setIsDropDownOpen ] =  useState(false);
  return (
    <div className="fixed md:hidden z-10 w-full h-14 bg-gray-50 shadow-xl border-b pb-2 flex flex-row items-center justify-between">
        <div className="w-44 border border-gray-100 shadow-xl mt-4 ml-2">
          <img src="https://oralpath.sriher.com//resources/assets/images/NewSRIHER-01_new1.png" alt="Logo" className="w-full h-full"/>
        </div>        
        <div className="mr-4 w-6 h-6"
          onClick={() => setIsDropDownOpen((prev) => !prev) }
        >
            <GiHamburgerMenu className="w-full h-full"/>
        </div>
        {
          isDropDownOpen && (
            <div className="bg-gray-400 absolute right-0 top-14 w-full">
              <ul className="flex flex-col items-center justify-between gap-2 text-lg text-gray-800 text-gray-50 cursor-pointer py-3">
                <li className={ type==="home" && ('bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150')}>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li><a href="https://oralpath.sriher.com/resources/assets/brochure/MASTERMINDSERIES02March03.pdf" target={"_blank"}>Broucher</a></li>
                <li className={ type==="events" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/events"}>Events</Link>
                </li>
                <li className={ type==="achivements" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/achivements"}>Achivements</Link>
                </li>
                <li className={ type==="gallery" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
                <li className={ type==="projects" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/projects"}>Projects</Link>
                </li>      
                <li className={ type==="login" && 'w-full bg-red-900 border border-teal-100 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li className={ type==="register" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/register"}>Register</Link>
                </li>                    
            </ul>
            </div>
          )
        }
      </div>
  )
}

export default SmNavBar;


