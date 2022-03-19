import "./App.css";
import GroceryForm from "./components/GroceryForm";
import GroceryContainer from "./components/GroceryContainer";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="app">
      <div className="bg"></div>
      <section className="center">
        <GroceryForm />
        <GroceryContainer />
        <Favorite />
      </section>
    </div>
  );
}

export default App;
