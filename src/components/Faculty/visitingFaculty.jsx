import React, { useState } from 'react'
import Slider from 'react-slick';
import { Link } from "react-router-dom";

//components
import FacultyCarousal from "./faculty.Carousal";
import { NextArrows, PrevArrows } from '../CarousalArrows';

const VisitingFaculty = () => {
    const [facult, setFaculty] = useState([
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1632921415_Dr.WM%20Tilakratne.jpg",
            name: "DR.WM TILAKARATNE",
            deg: "",
            position: "VISITING PROFESSOR.",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1601391429_Dr.Ranganathan.JPG",
            name: "DR.K. RANGANATHAN",
            deg: "",
            position: "ADJUNCT PROFESSOR",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1775476323_Dr.Anand%20Ramanathan.jpg",
            name: "DR.ANAND RAMANATHAN",
            deg: "",
            position: "VISITING PROFESSOR.",
        },        
    ]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,   
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2000,
        cssEase: "linear", 
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,            
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,                         
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              //nextArrow: <NextArrows />,
              //prevArrow: <PrevArrows />, 
            }
          },
          {
            breakpoint: 480,
            settings: {            
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: false,
              prevArrow: false,
            }
          }
        ]
      };
      
  return (
    <>
        <div className="py-10">
          <div className="flex flex-row items-center justify-between mx-10 md:mx-40 pb-8">
            <h1 className="text-2xl font-semibold text-blue-800 font-light">VisitingFaculty</h1>
            <Link to="./allfaculty"><p className="text-xs md:text-sm font-light">see more</p></Link>
          </div>
          <div className="w-80 md:w-auto lg:mx-40">
              <Slider {...settings}>
                  {
                      facult.map((data) => (
                          <FacultyCarousal {...data} />
                      ))
                  }
              </Slider>
          </div>
        </div>
    </>
  )
}

export default VisitingFaculty;