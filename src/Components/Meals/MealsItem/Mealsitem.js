import { useContext } from "react";
import classes from "./Mealsitem.module.css";
import MealitemsFrom from "./MealitemsFrom";
import { CartContext } from "../../../store/Cart-context";

const Mealsitem = (props) => {
  const { cartcontext } = useContext(CartContext);
  const addtocarthandler = (amount) => {
    cartcontext.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price.toFixed(2)}</div>
        </div>
        <div>
          <MealitemsFrom onenteramount={addtocarthandler} />
        </div>
      </li>
    </>
  );
};

export default Mealsitem;
