
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
// @ts-ignore
import React from "react";
import Iframe from "react-iframe";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid md={4} xs={24} item>
                <div className="footer__logo">
                  <Link to="#">Logo Here</Link>
                </div>
              </Grid>
              <Grid md={4} xs={12} item>
                <div className="footer__newslatter">
                  <form action="#">
                    <input type="text" placeholder="Email" />
                    <button type="submit" className="site-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </Grid>
              <Grid md={4} xs={12} item>
                <div className="footer__social">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-dribbble"></i>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item md={2} xs={12}>
              <div className="footer__widget">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Departments</Link>
                  </li>
                  <li>
                    <Link to="#">Find a Doctor</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">News</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={2} xs={12}>
              <div className="footer__widget">
                <h5>Quick links</h5>
                <ul>
                  <li>
                    <Link to="#">Facial Fillers</Link>
                  </li>
                  <li>
                    <Link to="#">Breast Surgery</Link>
                  </li>
                  <li>
                    <Link to="#">Body Lifts</Link>
                  </li>
                  <li>
                    <Link to="#">Face &amp; Neck</Link>
                  </li>
                  <li>
                    <Link to="#">Fat Reduction</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <div className="footer__address">
                <h5>Contact Us</h5>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> Los Angeles Gournadi,
                    1230 Bariasl
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> 1-677-124-44227
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> Support@gmail.com
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <div className="footer__map">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
                  width="100%"
                  height="190"
                  id="myId"
                  className="myClassname"
                  // display="initial"
                  position="relative"
                  // style={{ border:0}}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="footer__copyright">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid md={7} xs={12} item>
              <div className="footer__copyright__text">
                <p>Copyright © 2022 All rights reserved</p>
              </div>
            </Grid>
            <Grid md={5} xs={12} item>
              <ul>
                <li>All Rights Reserved</li>
                <li>Terms &amp; Use</li>
                <li>Privacy Policy</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
