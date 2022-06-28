import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicescontent } from "./utils/helper";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
        {servicescontent.map((service) => {
          return (
            <div key={service}>
              <div className="services__item">
                <div className="services__item__icon">
                  <span className={service.icon}></span>
                </div>
                <div className="services__item__text">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default ServicesSlider;
