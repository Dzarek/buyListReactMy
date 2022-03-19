import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const url = `https://buy-list-dzarek.herokuapp.com/api/products/`;

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const container = document.querySelector(".grocery-container");
  const alert = document.querySelector(".alert");

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString().slice(3, -1);
    if (productName && !edit) {
      displayAlert("dodano do listy", "success");
      const newProduct = {
        id: id,
        name: productName,
      };
      setProducts([...products, newProduct]);
      container.classList.add("show-container");
    } else if (productName && edit) {
      displayAlert("produkt zmieniony", "success");

      setProducts(
        products.map((item) => {
          if (item.id === editID) {
            return { ...item, name: productName };
          }
          return item;
        })
      );
    }
    setBackToDefault();
  };

  function setBackToDefault() {
    setProductName("");
    setEdit(false);
    setEditID(null);
  }

  function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 2000);
  }

  const deleteEverything = () => {
    setProducts([]);
  };

  const deleteItem = (id) => {
    const updateProducts = products.filter((item) => item.id !== id);
    setProducts(updateProducts);
  };
  const handleEditItem = (id) => {
    function displayAlertEdition(text, action) {
      alert.textContent = text;
      alert.classList.add(`alert-${action}`);
    }
    displayAlertEdition("edycja", "success");

    const oneProduct = products.find((item) => item.id === id);
    setProductName(oneProduct.name);
    setEdit(true);
    setEditID(id);
  };

  return (
    <AppContext.Provider
      value={{
        productName,
        edit,
        products,
        handleChange,
        addItem,
        deleteEverything,
        deleteItem,
        handleEditItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };