import React from "react";
import GroceryItem from "./GroceryItem";
import { useGlobalContext } from "../context";

const GroceryContainer = () => {
  const { products, deleteEverything, openClearModal, setOpenClearModal } =
    useGlobalContext();
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {products.map((item, index) => {
          return <GroceryItem key={index} {...item} />;
        })}
      </div>
      <button
        type="button"
        className="clear-btn"
        onClick={() => setOpenClearModal(true)}
      >
        wyczyść listę
      </button>
      {openClearModal && (
        <div className="clearModal">
          <h2>Czy na pewno wyczyścić całą listę?</h2>
          <section>
            <button
              className="alert-success"
              onClick={() => setOpenClearModal(false)}
            >
              NIE
            </button>
            <button className="alert-danger" onClick={deleteEverything}>
              TAK
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default GroceryContainer;
