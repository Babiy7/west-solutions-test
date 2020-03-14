import React, { memo } from "react";
import classes from "./Button.module.scss";

const Button = props => {
  console.log("Button rendering");

  return (
    <button className={classes.Button} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default memo(Button);
