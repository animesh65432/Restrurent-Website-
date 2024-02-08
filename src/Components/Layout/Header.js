import React from "react";

import mealsImg from "../../assets/meals.jpg";
import classses from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = ({ onCartToggle }) => {
  return (
    <>
      <header className={classses.header}>
        <h1>Meals </h1>
        <HeaderCartBtn onClick={onCartToggle} />
      </header>
      <div className={classses["banner-wrap"]}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
};

export default Header;
