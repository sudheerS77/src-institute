import React from 'react';
import { Link } from 'react-router-dom';
import {IoLogoGooglePlaystore} from "react-icons/io5"

const Footer = () => {
  return (
    <>
        <div style={{backgroundColor: "rgb(1, 13, 46)",}} className="bg-cyan-700 w-full flex flex-col-reverse md:flex-row items-start mpx-4 py-5 md:py-10">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="flex flex-col items-start gap-3 text-gray-50 px-10 md:px-0">
                <h4 className="text-lg texgt-gray-800 font-normal">Contact us</h4>
                <h5 className="text-md texgt-gray-300 font-light">No1,Sriramachandra nagar,porur</h5>
                <h5 className="text-md texgt-gray-300 font-light">044 4592 8500</h5>
                <h5 className="text-md texgt-gray-300 font-light">oralpathology@sriramachandra.edu.in</h5>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center gap-10">            
              <a href="https://play.google.com/store/apps/details?id=com.sriher.oralpathology" target={"_blank"}>
                <img src="https://cdn.iconscout.com/icon/free/png-128/google-166-189830.png" alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sriher.oralpathology" target={"_blank"}>
                <img src="https://cdn.iconscout.com/icon/free/png-64/aivalable-225374.png" alt="" className="w-32" />
              </a>
            </div>
        </div>
    </>
  )
}

export default Footer