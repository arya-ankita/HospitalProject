import {
  Autocomplete,
  Button,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import "./book-appoinment.scss";
const BookAppoinment = () => {
  const top100Films = [{ label: "10" }, { label: "20" }, { label: "30" }];

  const clinicSift = [{ label: "Day Shift" }, { label: "Night Shift" }];
  const doctorname = [{ label: "John" }, { label: "Tom" }];
  const clinicBranch = [
    { label: "Clinic Branch 1" },
    { label: "Clinic Branch 2" },
    { label: "Clinic Branch 3" },
  ];
  return (
    <>
      <div className="book-appoinment">
        <form noValidate autoComplete="off">
          <Stack spacing={2}>
            <TextField fullWidth label="Patient  Name" size="small" />
            <TextField
              fullWidth
              label="Patient  Mobile Number"
              type="number"
              size="small"
            />
            <TextField
              fullWidth
              label="Patient Email ID"
              size="small"
              type="email"
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Patient Age" />
              )}
            />
            <TextField
              fullWidth
              label="Patient Height"
              size="small"
              type="text"
            />

            <Autocomplete
              disablePortal
              options={clinicBranch}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Clinic Branch" />
              )}
            />

            <Autocomplete
              disablePortal
              options={clinicSift}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Clinic sift" />
              )}
            />
            <Autocomplete
              disablePortal
              options={doctorname}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Doctor Name" />
              )}
            />
            <TextField
              id="date"
              label="Date"
              variant="outlined"
              size="small"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Disease discription"
              size="medium"
              type="text"
              multiline
              rows={3}
            />

            <Button variant="contained" color="primary" className="btn-book">
              Book appoitment
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};
export default BookAppoinment;
