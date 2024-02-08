import React from "react";
import { CartContext } from "./Cart-context";

const Cartprovider = (props) => {
  const additemhandler = (item) => {};
  const removeitemhandler = (id) => {};
  const cartcontext = {
    items: [],
    totalamount: 0,
    additem: additemhandler,
    removeitem: removeitemhandler,
  };

  return (
    <CartContext.Provider value={{ cartcontext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
