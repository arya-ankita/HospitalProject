import React from "react";
import "./heading.css";
const Heading = (props) => {
  return (
    <>
      <div className="section_title text_center">
        <span>{props.subname}</span>
        <h2>{props.title}</h2>
      </div>
    </>
  );
};
export default Heading;
