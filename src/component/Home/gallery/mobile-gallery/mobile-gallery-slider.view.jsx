import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryImages } from "../web-gallery/utils/helper";
const MobileGallerySlider = () => {
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
        {galleryImages.map((image) => {
          return (
            <div key={image}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default MobileGallerySlider;
