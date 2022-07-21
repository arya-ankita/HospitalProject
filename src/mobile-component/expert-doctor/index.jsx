import React from "react";
import Heading from "../heading";
import ExpertDoctorSlider from "./expert-doctor-slider/expert-doctor-slider.view";

import "./expertDoctor.scss";
const ExpertDoctor = () => {
  return (
    <>
      <div className="team">
        <Heading title="Our Doctors" />

        <ExpertDoctorSlider />
      </div>
    </>
  );
};
export default ExpertDoctor;
