import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "susi", amount: "100", price: 1000 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <>
      <div>
        Cartitems
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>1</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>close</button>
          <button className={classes.button}>order</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
