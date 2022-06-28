import { Container } from "@mui/material";
import React from "react";
import Heading from "../../heading";
import ExpertDoctorSlider from "./expert-doctor-slider/expert-doctor-slider.view";
import "./expert-doctor.css";
const ExpertDoctor = () => {
  return (
    <>
      <div className="team spad">
        <Container>
          <Heading subname="Our Team" title="Our Expert Doctors" />
          <ExpertDoctorSlider />
        </Container>
      </div>
    </>
  );
};
export default ExpertDoctor;
