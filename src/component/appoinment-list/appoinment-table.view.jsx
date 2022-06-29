import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import "./appoinment-table.css";

const columns = [
  { id: "no", label: "S.no", minWidth: 20 },
  { id: "name", label: "Doctor Name", minWidth: 200 },
  { id: "patient", label: "Patient Name", minWidth: 200 },
  {
    id: "appointment",
    label: "Appointment Date",
    minWidth: 170,
    align: "left",
  },
  {
    id: "appointmenttime",
    label: "Appointment time",
    minWidth: 170,
    align: "left",
  },
  {
    id: "mobile",
    label: "Mobile No",
    minWidth: 170,
    align: "left",
  },
];

function createData(no, name, patient, appointment, appointmenttime, mobile) {
  return { no, name, patient, appointment, appointmenttime, mobile };
}

const rows = [
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
  createData(
    "1",
    "sunil",
    "Rohit Jain",
    "17/06/2022",
    "10:00-10:15 AM",
    "1800-123-4567"
  ),
];
export default function AppointmentTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="pb_50">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className="tableRow"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
