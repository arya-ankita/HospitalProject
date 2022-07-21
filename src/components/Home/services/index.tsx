import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Heading from "../../heading";
import "./services.css";
import ServicesSlider from "./services-slider/ServiceSliderView"; 
const Ourservices = () => {
  return (
    <>
      <div className="services spad set_bg1">
        <Container sx={{ position: "relative", zIndex: "1" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid lg={8} xs={12} item>
              <Heading subname="Our services" title="Offer for you" />
            </Grid>
            <Grid lg={4} xs={12} item>
              <div className="services__btn">
                <Link to="#" className="primary_btn">
                  Contact us
                </Link>
              </div>
            </Grid>
          </Grid>
          <ServicesSlider />
        </Container>
      </div>
    </>
  );
};
export default Ourservices;
