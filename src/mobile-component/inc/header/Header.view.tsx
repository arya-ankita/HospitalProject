import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "./header.scss";
import MenuDrawer from "./MenuDrawer";
const HeaderView = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(true);
  };
  const closeDrawer = () => {
    setState(false);
  };
  return (
    <>
      <div className="header">
        <IconButton className="humber-menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <div className="mobile-logo">
          <h1>Hospital Project</h1>
        </div>
      </div>
      <MenuDrawer state={state} closeDrawer={closeDrawer} />
    </>
  );
};
export default HeaderView;
