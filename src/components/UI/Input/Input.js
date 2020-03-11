import React from "react";
import classes from "./Input.module.scss";

const Input = props => {
  let inputClasses = [classes.InputElement];

  if (props.invalid) {
    inputClasses.push(classes.Invalid);
  }

  return (
    <input
      className={inputClasses.join(" ")}
      onChange={props.changed}
      {...props.configuration.elementConfig}
    />
  );
};

export default Input;
