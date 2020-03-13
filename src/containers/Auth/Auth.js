import React from "react";
import classes from "./Auth.module.scss";

import { connect } from "react-redux";
import { login } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends React.Component {
  state = {
    username: "",
    password: "",

    controls: {
      username: {
        elementType: "input",
        elementConfig: {
          name: "username",
          type: "text",
          placeholder: "Type your username"
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          name: "password",
          type: "password",
          placeholder: "Type your password"
        },
        value: ""
      }
    }
  };

  changeHandler = e => {
    const name = e.target.name;

    this.setState({ [name]: e.target.value });
  };

  loginHandler = e => {
    e.preventDefault();

    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    if (this.props.isLogin) {
      return <Redirect to="/profile" />;
    }

    let controls = [];

    for (let elementType in this.state.controls) {
      controls.push({
        id: elementType,
        configuration: this.state.controls[elementType]
      });
    }

    let content = (
      <>
        <h2 className={classes.Title}>Login</h2>
        <form className={classes.Form}>
          {controls.map(element => (
            <div key={element.id} className={classes.InputContainer}>
              <Input
                changed={this.changeHandler}
                configuration={element.configuration}
              />
            </div>
          ))}

          <div className={classes.ButtonContainer}>
            <Button clicked={this.loginHandler}>Login</Button>
          </div>
        </form>
      </>
    );

    if (this.props.loading) {
      content = <Spinner />;
    }

    return <div className={classes.Auth}>{content}</div>;
  }
}

const mapStateToProps = state => {
  const store = state.authStore;

  return {
    loading: store.loading,
    error: store.error,
    isLogin: store.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: authData => dispatch(login(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
