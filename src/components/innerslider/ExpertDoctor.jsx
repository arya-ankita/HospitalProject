import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from "../../images/team-1.png";
import team2 from "../../images/team-2.png";
import team3 from "../../images/team-3.png";

export default function ExpertDoctor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
    { title: "Caroline Grant", img: team1 },
    { title: "Dr. Maria Angel", img: team2 },
    { title: "Nathan Mullins", img: team3 },
    { title: "Caroline Grant", img: team1 },
  ];
  return (
    <>
      <Slider {...settings}>
        {expertdocror.map((t, index) => (
          <div key={index}>
            <div className="team__item">
              <img src={t.img} alt="" />
              <h5>{t.title}</h5>
              <span>Plastic surgeon</span>
              <div className="team__item__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
