import React from "react";
import classes from "./MealitemsFrom.module.css";
import Input from "./Input";

const MealitemsFrom = () => {
  return (
    <>
      <from className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: 1,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultvalue: "1",
          }}
        />
        <button>+ Add</button>
      </from>
    </>
  );
};
export default MealitemsFrom;
