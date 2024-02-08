import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onclose={props.onclose} />, portal)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;
