import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from "../../images/gallery-1.png";
import team2 from "../../images/gallery-2.png";
import team3 from "../../images/gallery-3.png";

export default function GallerySlider() {
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
  const expertdocror = [
    {  img: team1 },
    {  img: team2 },
    { img: team3 },
    { img: team1 },
  ];
  return (
    <>
      <Slider {...settings}>
        {expertdocror.map((t, index) => (
          <div key={index}>
            <div>
              <img src={t.img} alt="" />
              
              
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
