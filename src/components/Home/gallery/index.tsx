import { Container } from "@mui/material";
import React from "react";
import Heading from "../../heading";
import WebGalleryImage from "./web-gallery/WebgalleryImageView"; 
import "./gallery.css";
import MobileGallerySlider from "./mobile-gallery/mobile-gallery-slider.view";
import useMediaQuery from "./hooks/useMediaQuery";
const WebGallery = () => {
  // @ts-ignore
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <div className="gallery">
        <Container>
          <Heading subname="Our Gallery" title="Gallery" />
          {isDesktop ? <WebGalleryImage /> : <MobileGallerySlider />}
        </Container>
      </div>
    </>
  );  
};

export default WebGallery;
