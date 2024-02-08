import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartbuttom.module.css";
const HeaderCartbuttom = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
};
export default HeaderCartbuttom;
