import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./menu-drawer.scss";

type closeDrawer = {
  state: boolean;
  closeDrawer: any;
};
export default function MenuDrawer(props: closeDrawer) {
  const drawermenu = [
    {
      name: "Home",
    },
    { name: "About Us" },
    { name: "Services" },
    { name: "Contact Us" },
  ];
  return (
    <>
      <Drawer anchor="left" open={props.state} onClose={props.closeDrawer}>
        <Box className="menu-drawer">
          <Typography variant="h2">
            <Stack direction="row" spacing={2}>
              <Avatar>H</Avatar> <span>Hospital</span>
            </Stack>
          </Typography>
          <nav className="-mx-auto">
            <List className="mobilemenu">
              {drawermenu.map((item, index) => (
                <ListItem disablePadding key={index} className="border-bottom">
                  <ListItemButton component="a" href="#">
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>

          <ul className="offcanvas-widget">
            <li>
              <i className="fa fa-phone"></i> 1-677-124-44227
            </li>
            <li>
              <i className="fa fa-map-marker"></i> Los Angeles Gournadi, 1230
              Bariasl
            </li>
            <li>
              <i className="fa fa-clock-o"></i> Mon to Sat 9:00am to 18:00pm
            </li>
          </ul>
          {/* <Divider />
          <div className="offcanvas-social">
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
          </div> */}
        </Box>
      </Drawer>
    </>
  );
}
