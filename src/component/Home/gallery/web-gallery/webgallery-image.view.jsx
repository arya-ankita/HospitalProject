import { Grid } from "@mui/material";
import React from "react";
import { galleryImages } from "./utils/helper";
const WebGalleryImage = () => {
  return (
    <>
      <Grid container spacing={2}>
        {galleryImages.map((image) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={image}>
              <img src={image} alt="" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default WebGalleryImage;
