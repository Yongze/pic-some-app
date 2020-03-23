import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";

function Image({ className, img }) {
  const [hovered, setHoverd] = useState(false);
  const {
    toggleFavorite,
    addItemToCart,
    cartItems,
    removeItemFromCart
  } = useContext(Context);

  const heart = hovered && (
    <i
      className={
        img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
      }
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  const plus = () => {
    if (!hovered) return;
    if (cartItems.find(item => item.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeItemFromCart(img.id)}
        ></i>
      );
    } else {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addItemToCart(img)}
        ></i>
      );
    }
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      <img src={img.url} className="image-grid" alt="" />
      {heart}
      {plus()}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
