import { Container } from "@mui/system";
import React from "react";
import Heading from "../heading";
import GalleryImage from "./utils/MobilegalleryImageView";
const MobileGallerySlider = () => {
  return (
    <div className="gallery">
      <Heading title="Clinic Photo" />
      <GalleryImage />
    </div>
  );
};
export default MobileGallerySlider;
