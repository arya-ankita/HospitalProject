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

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  consultation__form: {
    padding: "50px",
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
          <div className="mb-3">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className={classes.formwidth}
            />
          </div>
          <div className="mb-3">
            <TextField
              className={classes.formwidth}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
            <FormControl variant="outlined" className={classes.formwidth}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.selectlabel}
              >
                Type of service
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em> Type of service</em>
                </MenuItem>
                <MenuItem value={10}>Advanced equipment</MenuItem>
                <MenuItem value={20}>Qualified doctors</MenuItem>
                <MenuItem value={30}>Emergency care</MenuItem>
              </Select>
            </FormControl>
          </div>
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
