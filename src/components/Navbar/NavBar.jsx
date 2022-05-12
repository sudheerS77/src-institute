import React from 'react'
import { Link, useParams } from "react-router-dom";

import SmNavBar from './smNavBar';


const LgNav = () => {
  const { type } = useParams();

  return (
    <div className="hidden fixed z-10 w-full bg-gray-50 md:flex flex-col items-start gap-2">
        <div>
          <div className="md:w-64 lg:w-96 border border-gray-100 shadow-xl mt-2">
            <img src="https://oralpath.sriher.com//resources/assets/images/NewSRIHER-01_new1.png" alt="Logo" className="w-full h-full"/>
          </div>          
        </div>
        <div className="bg-teal-700 w-screen h-10 flex items-center opacity-90 flex flex-row items-center justify-between">
            <ul className="flex flex-row lg:ml-36 items-center justify-between md:gap-6 lg:gap-12 md:text-sm lg:text-lg text-gray-50 mx-8 cursor-pointer">
              <li className={ type==="home" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
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
              <li className={ type==="projects" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                <Link to={"/projects"}>Projects</Link>
              </li>              
            </ul>
            <ul className="lg:mr-20 flex flex-row items-center justify-between md:gap-6 lg:gap-12 md:text-sm lg:text-lg text-gray-50 mx-8 cursor-pointer">
            <li className={ type==="login" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                <Link to={"/login"}>Login</Link>
              </li>
              <li className={ type==="register" && 'bg-teal-800 border border-teal-500 border-grey-50 shadow-2xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                <Link to={"/register"}>Register</Link>
              </li>
            </ul>
        </div>
      </div>
  )
}


const NavBar = () => {
  return (
    <>
      <div>        
          <LgNav />   
          <SmNavBar />            
      </div>

    </>
  )
}

export default NavBar