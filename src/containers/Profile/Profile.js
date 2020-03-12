import React from "react";
import classes from "./Profile.module.scss";

import Button from "../../components/UI/Button/Button";

const Profile = () => {
  return (
    <div className={classes.Profile}>
      <div className={classes.UserContainer}>
        <div className={classes.Image}>
          <h2 className={classes.Letter}>U</h2>
        </div>

        <h2 className={classes.Name}>User Name</h2>

        <div className={classes.ButtonContainer}>
          <Button>Log out</Button>
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
    </div>
  );
};

export default Profile;
