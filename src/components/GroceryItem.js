import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";

const GroceryItem = ({ id, name }) => {
  const { deleteItem, handleEditItem } = useGlobalContext();
  return (
    <article data-id={id} className="grocery-item">
      <div className="ok">
        <button
          type="button"
          className="edit-btn"
          onClick={() => handleEditItem(id)}
        >
          <FaEdit />
        </button>
        <p className="title">{name}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default GroceryItem;
