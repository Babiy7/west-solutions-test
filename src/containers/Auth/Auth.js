import React, { useState } from "react";
import classes from "./Auth.module.scss";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const Auth = () => {
  const [state, setState] = useState({
    controls: {
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Type your username"
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Type your password"
        },
        value: ""
      }
    }
  });

  let controls = [];

  for (let elementType in state.controls) {
    controls.push({
      id: elementType,
      configuration: state.controls[elementType]
    });
  }

  return (
    <div className={classes.Auth}>
      <h2 className={classes.Title}>Login</h2>
      <form className={classes.Form}>
        {controls.map(element => (
          <div className={classes.InputContainer}>
            <Input key={element.id} configuration={element.configuration} />
          </div>
        ))}

        <div className={classes.ButtonContainer}>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
