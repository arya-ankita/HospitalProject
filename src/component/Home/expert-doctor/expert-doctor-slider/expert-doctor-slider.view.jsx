import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { doctorImages } from "./utils/helper";
const ExpertDoctorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,

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
          dots: true,
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
              <div className="team__item">
                <img src={image.imgURL} alt="" />
                <h5>{image.title}</h5>
                <span>{image.subtitle}</span>
                <div className="team__item__social">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default ExpertDoctorSlider;
