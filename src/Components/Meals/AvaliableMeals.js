import React from "react";
import classes from "./AvaliableMeals.module.css";
import Card from "../UI/Card";
import Mealsitem from "./MealsItem/Mealsitem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvaliableMeals = () => {
  const meallist = DUMMY_MEALS.map((maels) => (
    <Mealsitem
      key={maels.id}
      name={maels.name}
      description={maels.description}
      price={maels.price}
    />
  ));
  return (
    <section className={classes.maels}>
      <Card>
        <ul>{meallist}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
