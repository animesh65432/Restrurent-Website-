import React, { useRef, useState } from "react";
import classes from "./MealitemsFrom.module.css";
import Input from "./Input";

const MealitemsFrom = (props) => {
  const inputref = useRef();
  const [amountisvail, setamountisvaild] = useState(false);
  const Onsubmithandler = (e) => {
    e.preventDefault();
    const enterAmount = inputref.current.value;
    const enterAmountNumber = Number(enterAmount);

    if (
      !enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setamountisvaild(false);
      return;
    } else {
      props.onenteramount(enterAmountNumber);
    }
  };

  return (
    <>
      <form className={classes.form}>
        <Input
          ref={inputref}
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
        <button onClick={Onsubmithandler}>+ Add</button>
        {!amountisvail && <p>Please enter the vaild number(1-5)</p>}
      </form>
    </>
  );
};
export default MealitemsFrom;
