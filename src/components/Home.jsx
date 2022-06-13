import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../images/h-slide-2.jpg";
import banner1 from "../images/h-slide-3.jpg";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import BookAppoinment from "./card/BookAppoinment";
import Background from "../images/video.png";
import OffterSlider from "./innerslider/OfferSlider";
import ServicesSlider from "./innerslider/ServicesSlider";
import ExpertDoctor from "./innerslider/ExpertDoctor";
import GallerySlider from "./innerslider/GallerySlider";
import Footer from "./Footer";

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <>
      <Header />
      <div className="banner">
        <Slider {...settings}>
          <div>
            <img src={banner} alt="" />
          </div>
          <div>
            <img src={banner1} alt="" />
          </div>

          <div>
            <img src={banner} alt="" />
          </div>
          <div>
            <img src={banner1} alt="" />
          </div>
        </Slider>
      </div>

      <div className="main-content">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid md={4} xs={12} item>
              <BookAppoinment />
            </Grid>
            <Grid md={8} xs={12} item>
              <div className="consultation__text">
                <Grid container justifyContent="center" alignItems="center">
                  <Grid md={6} xs={12} item>
                    <div className="consultation__text__item mb-3">
                      <div className="section-title">
                        <span>Welcon to Aesthetic</span>
                        <h2>
                          Find Best Doctors With <b>AESTHETIC</b>
                        </h2>
                      </div>
                      <p>
                        30 Years of experience in Cosmetic Surgery.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <div
                      className="consultation__video set-bg"
                      style={{
                        backgroundImage: "url(" + Background + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=PXsuI67s2AA"
                        className="play-btn video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="chooseus spad">
        <Container>
          <div className="section-title text-center">
            <span>Why choose us?</span>
            <h2>Offer for you</h2>
          </div>

          <OffterSlider />
        </Container>
      </div>
      <div className="services spad set-bg1">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid lg={8} xs={12} item>
              <div className="section-title">
                <span>Our services</span>
                <h2>Offer for you</h2>
              </div>
            </Grid>
            <Grid lg={4} xs={12} item>
              <div className="services__btn">
                <a href="#" className="primary-btn">
                  Contact us
                </a>
              </div>
            </Grid>
          </Grid>
          <ServicesSlider />
        </Container>
      </div>
      <div className="team spad">
        <Container>
          <div className="section-title text-center">
            <span>Our Team</span>
            <h2>Our Expert Doctors</h2>
          </div>
          <ExpertDoctor />
        </Container>
      </div>
      <div className="spad">
        <GallerySlider />
      </div>
      <Footer/>
    </>
  );
}
