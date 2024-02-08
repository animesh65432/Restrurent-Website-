import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartbuttom.module.css";
import { CartContext } from "../../store/Cart-context";
const HeaderCartbuttom = (props) => {
  const { cartcontext } = useContext(CartContext);

  const numberofcartitems = cartcontext.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <>
      <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofcartitems}</span>
      </button>
    </>
  );
};
export default HeaderCartbuttom;
