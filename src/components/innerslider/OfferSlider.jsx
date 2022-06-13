import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../images/xci.png";
import icon2 from "../../images/xci-2.png";
import icon3 from "../../images/xci-3.png";
import icon4 from "../../images/xci-4.png";
export default function OffterSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay:true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
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

  const slidercontent = [
    { icon: icon1, title: "Advanced equipment" },
    { icon: icon2, title: "Qualified doctors" },
    { icon: icon3, title: "Certified services" },
    { icon: icon4, title: "Emergency care" },
    { icon: icon1, title: "Advanced equipment" },
  ];
  return (
    <>
      <Slider {...settings} className="sliderbox">
        {slidercontent.map((s, index) => (
          <div className="px-3" key={index}>
            <div className="chooseus__item">
              <img src={s.icon} alt="" />
              <h5>{s.title}</h5>
              <p>
                Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
                tempor cididunt facilisis.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
