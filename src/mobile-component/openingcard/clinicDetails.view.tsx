import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./clinic-details.scss";
const ClinicDetails = () => {
  const openingHours = [
    { days: "Monday - Saturday", time: "Timing" },
    { days: "After Noon", time: "1:00 - 4:00 pm" },
    { days: "Evening", time: "5:00 - 9:00 pm" },
    { days: "Sunday", time: "Close" },
  ];
  return (
    <>
      <Card>
        <CardContent className="bg-white list-style">
          <div className="clinic-details">
            <h5>Opening Hours</h5>
            <List>
              {openingHours.map((items, index) => (
                <ListItem key={index}>
                  <ListItemText className="w-70">{items.days}</ListItemText>
                  <ListItemText className="w-30">{items.time}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default ClinicDetails;
