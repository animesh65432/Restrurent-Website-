import "./App.css";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [CartShow, SetCart] = useState(false);

  const ShowCardhandler = () => {
    SetCart(true);
  };

  const HideCardhandler = () => {
    SetCart(false);
  };

  return (
    <>
      {CartShow && <Cart onclose={HideCardhandler} />}
      <Header onshowCart={ShowCardhandler} />

      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
