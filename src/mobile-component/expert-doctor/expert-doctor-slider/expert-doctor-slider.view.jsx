import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctorImages } from "./utils/helper";

const ExpertDoctorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {doctorImages.map((image) => {
          return (
            <div key={image}>
              <div className="team-item">
                <img src={image.imgURL} alt="" />
                <h5>{image.title}</h5>
                <span>{image.subtitle}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default ExpertDoctorSlider;
