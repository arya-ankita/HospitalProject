import React from "react";
import { Container } from "@mui/system";
import "./why-choose.css";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chosseIcon_1 from "../../../assets/images/xci.png";
import chosseIcon_2 from "../../../assets/images/xci-2.png";
import chosseIcon_3 from "../../../assets/images/xci-3.png";
import chosseIcon_4 from "../../../assets/images/xci-4.png";
import Heading from "../../heading";

const WhyChoose = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 8,
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
    { icon: chosseIcon_1, title: "Advanced equipment" },
    { icon: chosseIcon_2, title: "Qualified doctors" },
    { icon: chosseIcon_3, title: "Certified services" },
    { icon: chosseIcon_4, title: "Emergency care" },
    { icon: chosseIcon_1, title: "Advanced equipment" },
  ];
  return (
    <div className="why_choose_area spad">
      <Container>
        <Heading subname="Why choose us?" title="Offer for you" />
        <Slider {...settings} className="sliderbox">
          {slidercontent.map((s, index) => (
            <div className="px_3" key={index}>
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
      </Container>
    </div>
  );
};
export default WhyChoose;
