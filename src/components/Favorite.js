import React from "react";

const Favorite = () => {
  return (
    <div className="favorite">
      <h4 className="favorite-title">Ulubione Produkty</h4>
      <div className="favorite-choose">
        <button className="favorite-choose-btn food">spożywcze</button>
        <button className="favorite-choose-btn chemic">chemia</button>
      </div>
      <div className="favorite-container none">
        <form className="favorite-container-buttons">
          <select
            name="kategorie"
            id="kategorie"
            className="favorite-select"
          ></select>
        </form>
        <div className="favorite-container-products"></div>
      </div>
      <div className="favorite2-container none">
        <form className="favorite-container2-buttons">
          <select
            name="kategorie"
            id="kategorie"
            className="favorite-select2"
          ></select>
        </form>
        <div className="favorite-container2-products"></div>
      </div>
    </div>
  );
};

export default Favorite;
