import React, { useState, useCallback } from "react";


// import DztImageGalleryComponent from "reactjs-image-gallery";

import NavBar from '../components/Navbar/NavBar'
import GalleryComponent from "../components/Gallery/gallery.Component";
import Footer from "../components/footer";

const GalleryPage = () => {

    const galleryImages = [
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1057987441_WhatsApp%20Image%202021-02-25%20at%204.53.58%20PM.jpeg",
      width: "2500",
      height: "2500",

    },	
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1103513440_WhatsApp%20Image%202021-02-25%20at%202.07.11%20PM.jpeg",
      width: 1600,
      height: 1600,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/617910817_WhatsApp%20Image%202021-02-25%20at%202.04.04%20PM.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/400389095_WhatsApp%20Image%202021-02-25%20at%201.55.58%20PM%20(1)%20-%20Copy.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1057987441_WhatsApp%20Image%202021-02-25%20at%204.53.58%20PM.jpeg",
      width: "2500",
      height: "2500",

    },	
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1103513440_WhatsApp%20Image%202021-02-25%20at%202.07.11%20PM.jpeg",
      width: 1600,
      height: 1600,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/617910817_WhatsApp%20Image%202021-02-25%20at%202.04.04%20PM.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/400389095_WhatsApp%20Image%202021-02-25%20at%201.55.58%20PM%20(1)%20-%20Copy.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1057987441_WhatsApp%20Image%202021-02-25%20at%204.53.58%20PM.jpeg",
      width: "2500",
      height: "2500",

    },	
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1103513440_WhatsApp%20Image%202021-02-25%20at%202.07.11%20PM.jpeg",
      width: 1600,
      height: 1600,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/617910817_WhatsApp%20Image%202021-02-25%20at%202.04.04%20PM.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/400389095_WhatsApp%20Image%202021-02-25%20at%201.55.58%20PM%20(1)%20-%20Copy.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1057987441_WhatsApp%20Image%202021-02-25%20at%204.53.58%20PM.jpeg",
      width: "2500",
      height: "2500",

    },	
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/1103513440_WhatsApp%20Image%202021-02-25%20at%202.07.11%20PM.jpeg",
      width: 1600,
      height: 1600,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/617910817_WhatsApp%20Image%202021-02-25%20at%202.04.04%20PM.jpeg",
      width: 1600,
      height: 2000,
    },
    {
      image: "https://oralpath.sriher.com//resources/pcadmin/img/gallery/400389095_WhatsApp%20Image%202021-02-25%20at%201.55.58%20PM%20(1)%20-%20Copy.jpeg",
      width: 1600,
      height: 2000,
    },
    
    ]

  return (
    <>
        <NavBar />
        <div className="bg-pink-50">
          <div className='lg:w-full h-32 lg:-mb-1.5'></div> 
          <GalleryComponent name={"2ND NATIONAL ORAL PATHOLIDT DAY"} galleryImages={galleryImages} /> 
          <GalleryComponent name={"MICROSCOPE"} galleryImages={galleryImages} /> 
          
            {/* <DztImageGalleryComponent images={data } imageBackgroundColor={"white"} className="bg-white"/> */}
        </div>
        <Footer />
    </>
  )
}

export default GalleryPage