import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useGlobalContext } from "../context";

const GroceryForm = () => {
  const { handleChange, productName, addItem, edit } = useGlobalContext();
  return (
    <form className="grocery-form" onSubmit={addItem}>
      <p className="alert"></p>
      <h3>Lista Zakupów</h3>
      <div className="form-control">
        <section className="btnSubmit-container">
          <input
            type="text"
            id="grocery"
            placeholder="wpisz nazwę produktu"
            value={productName}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-btn">
            {!edit ? "dodaj" : "zmień"}
          </button>
        </section>
        <button type="button" className="submit-btn2">
          <FaMicrophone />
        </button>
      </div>
    </form>
  );
};

export default GroceryForm;
