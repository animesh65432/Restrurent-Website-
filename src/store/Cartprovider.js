import { useReducer } from "react";
import { CartContext } from "./Cart-context";

const defaultcartsate = {
  items: [],
  totalamount: 0,
};

const cartreucer = (state, action) => {
  if (action.type == "add") {
    const upadateitems = state.items.concat(action.item);
    const upadatetotalamount =
      state.totalamount + action.item.price * action.item.amount;
    return {
      items: upadateitems,
      totalamount: upadatetotalamount,
    };
  }
  return defaultcartsate;
};

const Cartprovider = (props) => {
  const [cartlstate, dispatchcart] = useReducer(cartreucer, defaultcartsate);
  const additemhandler = (item) => {
    dispatchcart({ type: "add", item: item });
  };
  const removeitemhandler = (id) => {
    dispatchcart({ type: "remove", id: id });
  };
  const cartcontext = {
    items: cartlstate.items,
    totalamount: cartlstate.totalamount,
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
