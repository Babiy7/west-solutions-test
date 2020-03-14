import React, { memo } from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  const show = props.show;

  return (
    <>
      <Backdrop show={show} unShow={props.unShow} />
      <div
        className={classes.Modal}
        style={{
          opacity: show ? "1" : "0",
          zIndex: show ? "500" : "-100"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default memo(Modal);
