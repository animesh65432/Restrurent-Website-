import React from "react";
import classes from "./Header.module.css";
import { HeaderImages } from "../../Images/Images";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImages} alt="Headerimages"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
