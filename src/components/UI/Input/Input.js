import React from "react";
import classes from "./Input.module.scss";

const Input = props => {
  let inputClasses = [classes.InputElement];

  return (
    <input
      className={inputClasses.join(" ")}
      onChange={props.changed}
      {...props.configuration.elementConfig}
    />
  );
};

export default Input;
