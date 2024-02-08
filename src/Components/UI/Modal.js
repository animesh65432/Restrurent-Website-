import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
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
      {createPortal(<Backdrop />, portal)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;
