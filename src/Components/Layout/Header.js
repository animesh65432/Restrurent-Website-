import React from "react";
import classes from "./Header.module.css";
import { HeaderImages } from "../../Images/Images";
import HeaderCartbuttom from "./HeaderCartbuttom";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartbuttom />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImages} alt="Headerimages"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
