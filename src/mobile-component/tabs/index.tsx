import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tabs.scss";
import BannerSlider from "../banner/BannerSlider";
import { Grid } from "@mui/material";
import Background from "../../assets/images/video.png";
import { Link } from "react-router-dom";
import "./about/about.scss";
import WhyChoose from "../whychoose/WhyChoose";
import Ourservices from "../services";

import ExpertDoctor from "../expert-doctor";
import MobileGallerySlider from "../gallery";
import BookAppoinment from "../BookAppoinment/BookAppoinment.view";
import ClinicDetails from "../openingcard/clinicDetails.view";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className="tabs-border">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabsmenu"
        >
          <Tab className="tabs-half" label="Home" {...a11yProps(0)} />
          <Tab className="tabs-half" label="Appointment" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BannerSlider />

        <div className="about-section">
          <Grid container>
            <Grid item xs={12}>
              <ClinicDetails />
            </Grid>
          </Grid>
        </div>
        <ExpertDoctor />
        {/* <WhyChoose /> */}
        <Ourservices />

        <MobileGallerySlider />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookAppoinment />
      </TabPanel>
    </Box>
  );
};
export default TabsView;
