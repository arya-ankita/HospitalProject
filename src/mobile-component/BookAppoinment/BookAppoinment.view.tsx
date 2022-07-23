import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import "./book-appoinment.scss";
interface State {
  inch: string;
  age: string;
}
const BookAppoinment = () => {
  const [values, setValues] = React.useState<State>({
    inch: "5.4",
    age: "18",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

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

            <Stack direction="row" spacing={3}>
              <TextField
                fullWidth
                label="Patient Age"
                size="small"
                type="number"
                value={values.age}
                onChange={handleChange("age")}
              />
              <TextField
                id="outlined-adornment-inch"
                size="small"
                value={values.inch}
                onChange={handleChange("inch")}
                label="Patient Height"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Inch</InputAdornment>
                  ),
                }}
                aria-describedby="outlined-inch-helper-text"
                inputProps={{
                  "aria-label": "inch",
                }}
              />
            </Stack>
            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Patient Age" />
              )}
            /> */}

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
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
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
