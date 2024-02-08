import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "susi", amount: "100", price: 1000 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <>
      <Modal onclose={props.onclose}>
        {Cartitems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>1</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onclose}>
            close
          </button>
          <button className={classes.button}>order</button>
        </div>
      </Modal>
    </>
  );
};
export default Cart;
