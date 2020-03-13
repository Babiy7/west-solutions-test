import React from "react";
import classes from "./Profile.module.scss";

import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

const Profile = props => {
  if (!props.isLogin) {
    return <Redirect to="/login" />;
  }

  let content = null;

  const logoutHandler = e => {
    e.preventDefault();

    props.logout();
  };

  content = (
    <>
      <div className={classes.UserContainer}>
        <div className={classes.Image}>
          <h2 className={classes.Letter}>U</h2>
        </div>

        <h2 className={classes.Name}>User Name</h2>

        <div className={classes.ButtonContainer}>
          <Button clicked={logoutHandler}>Log out</Button>
        </div>
      </div>
      <div className={classes.Content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          modi explicabo quaerat consequatur inventore, nemo ad officiis dicta
          vitae laboriosam sequi sint error rerum nulla doloremque quos delectus
          quasi quo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          modi explicabo quaerat consequatur inventore, nemo ad officiis dicta
          vitae laboriosam sequi sint error rerum nulla doloremque quos delectus
          quasi quo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          modi explicabo quaerat consequatur inventore, nemo ad officiis dicta
          vitae laboriosam sequi sint error rerum nulla doloremque quos delectus
          quasi quo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          modi explicabo quaerat consequatur inventore, nemo ad officiis dicta
          vitae laboriosam sequi sint error rerum nulla doloremque quos delectus
          quasi quo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          modi explicabo quaerat consequatur inventore, nemo ad officiis dicta
          vitae laboriosam sequi sint error rerum nulla doloremque quos delectus
          quasi quo.
        </p>
      </div>
    </>
  );

  if (props.loading) {
    content = <Spinner />;
  }

  return <div className={classes.Profile}>{content}</div>;
};

const mapStateToProps = state => {
  const store = state.authStore;

  return {
    loading: store.loading,
    isLogin: store.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
