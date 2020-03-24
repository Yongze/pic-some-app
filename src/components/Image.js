import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hoverd, ref] = useHover(false);
  const {
    toggleFavorite,
    addItemToCart,
    cartItems,
    removeItemFromCart
  } = useContext(Context);

  const heart = hoverd && (
    <i
      className={
        img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
      }
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  const plus = () => {
    if (!hoverd) return;
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
    <div className={`${className} image-container`} ref={ref}>
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
