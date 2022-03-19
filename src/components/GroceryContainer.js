import React from "react";
import GroceryItem from "./GroceryItem";
import { useGlobalContext } from "../context";

const GroceryContainer = () => {
  const { products, deleteEverything } = useGlobalContext();
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {products.map((item, index) => {
          return <GroceryItem key={index} {...item} />;
        })}
      </div>
      <button type="button" className="clear-btn" onClick={deleteEverything}>
        wyczyść listę
      </button>
    </div>
  );
};

export default GroceryContainer;
