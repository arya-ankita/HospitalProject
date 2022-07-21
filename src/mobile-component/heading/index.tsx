import React from "react";
import "./heading.css";

type name = {
  title: string;
};

const Heading = (props: name) => {
  return (
    <>
      <div className="section_title">
        <h2>{props.title}</h2>
      </div>
    </>
  );
};
export default Heading;
