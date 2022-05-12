import React, { useState } from 'react'
import Slider from "react-slick";


//Components
import { NextArrows, PrevArrows } from '../CarousalArrows';
import ImageCarousal from './ImageCarousal';

const HeroCarousals = () => {

    const [heroBanners, setHeroBanners] = useState([
        "https://oralpath.sriher.com/resources/template/images/slider/slider1.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/11.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/3.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/1.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/4.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/5.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/6.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/7.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/8.jpg",
        "https://oralpath.sriher.com/resources/template/images/slider_new/9.JPG"
      ]);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
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
              dots: true              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className="hidden lg:block md:mt-0 md:mx-6 md:px-4 ml-2.5">        
            <Slider {...settings} >
            {
                heroBanners.map((image) => (
                   <div className="md:px-0.5">
                        <ImageCarousal image={image} /> 
                   </div>               
                ))
            }
            </Slider>
        </div>
        <div className='w-80 ml-4 -mt-14 md:hidden'>
          <Slider {...settings} >
              {
                  heroBanners.map((image) => (
                    <div className="md:px-0.5">
                          <ImageCarousal image={image} /> 
                    </div>               
                  ))
              }
              </Slider>
        </div>
    </>
  )
}
export default HeroCarousals