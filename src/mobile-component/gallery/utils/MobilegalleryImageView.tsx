import { Grid } from "@mui/material";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../gallery.scss";
import { galleryImages } from "./helper";
const GalleryImage = () => {
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
        {galleryImages.map((image) => {
          return (
            <div key={image} className="mobile-slider">
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default GalleryImage;
