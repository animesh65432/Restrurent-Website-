import React from "react";
import classes from "./Mealsitem.module.css";
import MealitemsFrom from "./MealitemsFrom";

const Mealsitem = (props) => {
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price.toFixed(2)}</div>
        </div>
        <div>
          <MealitemsFrom />
        </div>
      </li>
    </>
  );
};

export default Mealsitem;
