import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerImages } from "./utils/helper";
import "./bannerslider.scss";
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
              <img src={image} alt="" className="banner-img" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default BannerSlider;
