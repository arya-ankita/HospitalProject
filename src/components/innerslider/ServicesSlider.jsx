import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServicesSlider() {
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
        <div>
          <div className="services__item">
            <div className="services__item__icon">
              <span className="flaticon-044-aesthetic"></span>
            </div>
            <div className="services__item__text">
              <h5>Body procedures</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="services__item">
            <div className="services__item__icon">
              <span className="flaticon-027-beauty"></span>
            </div>
            <div className="services__item__text">
              <h5>Facial Procedures</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="services__item">
            <div className="services__item__icon">
              <span className="flaticon-031-anatomy"></span>
            </div>
            <div className="services__item__text">
              <h5>Breast procedures</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="services__item">
            <div className="services__item__icon">
              <span className="flaticon-008-abdominoplasty"></span>
            </div>
            <div className="services__item__text">
              <h5>Skin care &amp; Beauty</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aliqua.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
