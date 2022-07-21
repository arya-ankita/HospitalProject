import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import { Link } from "react-router-dom";
  import "./menu-drawer.css";

  type closeDrawer={
    state:boolean,
    closeDrawer:any,
    
  }
  export default function MenuDrawer(props:closeDrawer) {
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
        <Drawer
          open={props.state}
          onClose={props.closeDrawer}
          sx={{ width: "280px" }}
        >
          <Box sx={{ width: "280px", padding: "15px" }}>
            <Typography variant="h2" className="makeStyles_title">
              Logo Here
            </Typography>
            <nav>
              <List className="mobilemenu">
                {drawermenu.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemButton component="a" href="#">
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
            <Divider sx={{ margin: "15px 0px" }} />
            <ul className="offcanvas__widget">
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
            <Divider sx={{ margin: "15px 0px" }} />
            <div className="offcanvas__social">
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
          </Box>
        </Drawer>
      </>
    );
  }
  