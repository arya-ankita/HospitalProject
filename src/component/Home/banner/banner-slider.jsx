import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { bannerImages } from "./utils/helper";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <>
      <Slider {...settings}>
        {bannerImages.map((image) => {
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
export default BannerSlider;
