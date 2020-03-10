import React from "react";
import classes from "./Layout.module.scss";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <header className={classes.Header}>
        <div className={classes.Container}>
          <h3 className={classes.Logo}>News</h3>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
