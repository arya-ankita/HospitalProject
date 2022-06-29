import { Container } from "@mui/material";
import React from "react";
import AppointmentTable from "../component/appoinment-list/appoinment-table.view";

import Breadcrumb from "../component/breadcrumb/breadcrumb.view";
const Appointment = () => {
  return (
    <>
      <Breadcrumb />
      <div className="appoinment_area">
        <Container>
          <AppointmentTable />
        </Container>
      </div>
    </>
  );
};
export default Appointment;
