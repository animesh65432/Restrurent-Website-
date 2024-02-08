import "./App.css";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />

      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
