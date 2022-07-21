import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuDropdown from "./dropdown/MenuDropdown";
import MenuDrawer from "./MenuDrawer";
import "./navbar.css";
import { IconButton } from "@mui/material";
// handleClick
const Header = () => {
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
            <Grid item xs={9}>
              <ul className="header__top__left">
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
            <Grid item xs={3}>
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
            </Grid>
          </Grid>
        </Container>
      </div>
      <AppBar position="static" className="appbar">
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
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
              <MenuIcon/>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="logo"
            >
              LOGO
            </Typography>
            <nav className="makeStyles_menuright_1">
              <Link to="/" className="active">
                Home
              </Link>
              <Link to="#">About Us</Link>
              <Link to="#">Services</Link>
              <Link to="#">Contact Us</Link>
            </nav>
            {/* handleClick={handleClick} */}
            <MenuDropdown/>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer state={state} closeDrawer={closeDrawer} />  
    </>
  );
};
export default Header;
