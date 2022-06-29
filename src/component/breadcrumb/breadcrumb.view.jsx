import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import "./breadcrumb.css";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const Breadcrumb = () => {
  const params = useParams();

  return (
    <>
      <div role="presentation" onClick={handleClick} className="breadcrumbx">
        <Container>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            </Link>
            <Link underline="hover" color="inherit" href="#!">
              Appointment
            </Link>

            <Typography color="text.primary">
              {params.type === "current-appointment"
                ? "Current appointment"
                : "Running appointment"}
            </Typography>
          </Breadcrumbs>
        </Container>
      </div>
    </>
  );
};
export default Breadcrumb;
