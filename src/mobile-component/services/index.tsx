import React from "react";

import { Grid } from "@material-ui/core";

import Heading from "../heading";

import "./services.scss";
import ServicesSlider from "./services-slider/ServiceSliderView";
const Ourservices = () => {
  return (
    <>
      <div className="services spad set_bg1">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid lg={8} xs={12} item>
            <Heading title="Our services" />
          </Grid>
          {/* <Grid lg={4} xs={12} item>
            <div className="services__btn">
              <Link to="#" className="primary_btn">
                Contact us
              </Link>
            </div>
          </Grid> */}
        </Grid>
        <ServicesSlider />
      </div>
    </>
  );
};
export default Ourservices;
