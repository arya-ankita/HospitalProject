import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuDropdown from "./dropdown/MenuDropdown";
import MenuDrawer from "./MenuDrawer";
import { IconButton } from "@mui/material";

const useStyles = makeStyles(() => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    flexGrow: 1,
  },

  AppBar: {
    background: "#fff !important",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => {
    setState(true);
  };
  const closeDrawer = () => {
    setState(false);
  };
  return (
    <>
      <div className="header__top">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <ul className="header__top__left" style={{ textAlign: "right" }}>
                <li>
                  <LocalPhoneIcon className="top-icon" /> 1-677-124-44227
                </li>
                <li>
                  <PinDropIcon className="top-icon" /> Los Angeles Gournadi,
                  1230 Bariasl
                </li>
                <li>
                  <QueryBuilderIcon className="top-icon" /> Mon to Sat 9:00am to
                  18:00pm
                </li>
              </ul>
            </Grid>
            {/* <Grid item xs={4}>
              <div className="header__top__right">
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
            </Grid> */}
          </Grid>
        </Container>
      </div>
      <AppBar position="static" className={classes.AppBar}>
        <Container>
          <Toolbar>
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  color: "#000",
                  width: "50px",
                  marginBlock: "15px",
                },
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <nav className="makeStyles-menuright-1">
              <Link to="#" className="active">
                Home
              </Link>
              <Link to="#">About Us</Link>
              <Link to="#">Services</Link>
              <Link to="#">Contact Us</Link>
            </nav>
            <MenuDropdown />
            {/* <Link to="#" className="primary-btn">
              Book Appointment
            </Link> */}
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer state={state} closeDrawer={closeDrawer} />
    </>
  );
};
export default Header;
