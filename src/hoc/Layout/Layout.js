import React from "react";
import classes from "./Layout.module.scss";

import NavLinks from "../../components/UI/NavLinks/NavLinks";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <header className={classes.Header}>
        <div className={classes.Container}>
          <h3 className={classes.Logo}>News</h3>

          <nav className={classes.Nav}>
            <NavLinks />
          </nav>
        </div>
      </header>
      <div className={classes.Content}>{props.children}</div>
    </div>
  );
};

export default Layout;
