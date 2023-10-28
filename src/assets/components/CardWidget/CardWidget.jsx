import React from "react";
import './CardWidget.css'
const CardWidget = () => {
  return (
    <div className="container">
      <img
        className="carrito"
        src="../../../../images/carrito.png"
        alt="Carrito de compras"
      />
       <span>1</span>
    </div>
  );
};

export default CardWidget;
