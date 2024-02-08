import React from "react";
import classes from "./MealitemsFrom.module.css";
import Input from "./Input";

const MealitemsFrom = () => {
  return (
    <>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: 1,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </>
  );
};
export default MealitemsFrom;
