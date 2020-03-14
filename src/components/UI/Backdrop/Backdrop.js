import React from "react";
import classes from "../Backdrop/Backdrop.module.scss";

const Backdrop = props => {
  return (
    <div
      onClick={props.unShow}
      style={{
        zIndex: props.show ? "100" : "-100",
        opacity: props.show ? "1" : "0"
      }}
      className={classes.Backdrop}
    />
  );
};

export default Backdrop;
