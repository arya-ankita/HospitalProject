import { Container, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import BookAppoinment from "../component/book-appoinment/BookAppointment.view";
import "../component/Home/home.css";
import Background from "../assets/images/video.png";
import WhyChoose from "../component/Home/whychoose";
import Ourservices from "../component/Home/services";
import BannerSlider from "../component/Home/banner/banner-slider";
import ExpertDoctor from "../component/Home/expert-doctor";
import WebGallery from "../component/Home/gallery";

const Home = () => {
  const titleRef = useRef();
  const Welcome = () => {
    return (
      <>
        <div className="consultation__text__item mb-3">
          <div className="section-title">
            <span>Welcon to Aesthetic</span>
            <h2>
              Find Best Doctors With <b>AESTHETIC</b>
            </h2>
          </div>
          <p>
            30 Years of experience in Cosmetic Surgery.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </>
    );
  };

  const DoctorVideo = () => {
    return (
      <div
        className="consultation__video set-bg"
        style={{
          backgroundImage: "url(" + Background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          to="https://www.youtube.com/watch?v=PXsuI67s2AA"
          className="play-btn video-popup"
        >
          <i className="fa fa-play"></i>
        </Link>
      </div>
    );
  };
  return (
    <>
      <div className="banner">
        <BannerSlider />
      </div>
      <div className="main_content">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid md={5} xs={12} item ref={titleRef}>
              <BookAppoinment />
            </Grid>
            <Grid md={7} xs={12} item>
              <div className="consultation__text">
                <Grid container justifyContent="center" alignItems="center">
                  <Grid md={6} xs={12} item>
                    <Welcome />
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <DoctorVideo />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <WhyChoose />
      <Ourservices />
      <ExpertDoctor />
      <WebGallery />
    </>
  );
};
export default Home;
