import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid, TextareaAutosize } from "@mui/material";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  consultation__form: {
    padding: "15px",
    marginTop: "-50px",
    background: "#fff",
    boxShadow: "0px 0px 15px rgb(0 0 0 / 10%)",
    borderRadius: "0px",
  },
  title: {
    fontSize: 15,
    color: "#888",
    fontWeight: "500",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  maintitle: {
    fontSize: "36px",
    color: "#111111",
    margin: "8px 0px 16px 0px",
    fontWeight: "700",
  },
  formwidth: {
    width: "100%",
  },
  selectlabel: {
    background: "#fff",
    paddingRight: "5px",
  },
  siteBtn: {
    fontSize: "15px",
    background: "#13a2b7",
    fontWeight: "600",
    border: "0px",
    borderRadius: "5px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    padding: "14px 30px 12px",
    width: "100%",
  },
});

export default function BookAppoinment() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.consultation__form}>
      <CardContent>
        <Typography variant="h6" className={classes.title} gutterBottom>
          REQUEST FOR YOUR
        </Typography>

        <Typography className={classes.maintitle} variant="h2">
          Consultation
        </Typography>
        <form noValidate autoComplete="off">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid md={6} xs={12} item>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                className={classes.formwidth}
              />
            </Grid>
            <Grid md={6} xs={12} item>
              <TextField
                className={classes.formwidth}
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
              />
            </Grid>
            <Grid md={6} xs={12} item>
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                className={classes.formwidth}
                type="email"
              />
            </Grid>
            <Grid md={6} xs={12} item>
              <FormControl variant="outlined" className={classes.formwidth}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className={classes.selectlabel}
                >
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em> Select Age</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20 </MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} item>
              <TextField
                label="Height"
                variant="outlined"
                className={classes.formwidth}
                type="text"
              />
            </Grid>
            <Grid md={6} xs={12} item>
              <TextField
                label="Clinic branch"
                variant="outlined"
                className={classes.formwidth}
                type="text"
              />
            </Grid>
            <Grid xs={12} item>
              <label className="label-dis">Disease discription</label>
              <TextareaAutosize
                className="textarea_box"
                maxRows={4}
                aria-label="maximum height"
                defaultValue=""
              />
            </Grid>
            <Grid md={6} xs={12} item>
              <FormControl variant="outlined" className={classes.formwidth}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className={classes.selectlabel}
                >
                  Clinic sift
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em> Select sift</em>
                  </MenuItem>

                  <MenuItem value="days">Days</MenuItem>
                  <MenuItem value={"night"}>Night</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} item>
              <FormControl variant="outlined" className={classes.formwidth}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className={classes.selectlabel}
                >
                  Doctor name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em> Doctor name</em>
                  </MenuItem>

                  <MenuItem value="john">John</MenuItem>
                  <MenuItem value="tom">Tom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={12} xs={12} item>
              <TextField
                id="date"
                label="Date"
                variant="outlined"
                type="date"
                defaultValue="2017-05-24"
                className={classes.formwidth}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.siteBtn}>
          Book appoitment
        </Button>
      </CardActions>
    </Card>
  );
}
