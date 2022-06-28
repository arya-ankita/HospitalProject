import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "@mui/material/Link";
export default function MenuDropdown({ handleClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleAppoinment = () => {
    handleClick();
    setTimeout(() => {
      handleClose();
    }, 300);
  };

  return (
    <div>
      <Button
        className="text_black"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick1}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Appointment
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem>
          <Link
            href="#!"
            onClick={handleAppoinment}
            underline="none"
            color="inherit"
          >
            Book appointment
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="/appointment/current-appointment"
            underline="none"
            color="inherit"
          >
            Current appointment
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="/appointment/running-appointment"
            underline="none"
            color="inherit"
          >
            Running appointment
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
