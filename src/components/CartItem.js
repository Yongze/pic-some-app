import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const { removeItemFromCart } = useContext(Context);
  const [hoverd, ref] = useHover();
  const icon = hoverd ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={icon}
        onClick={() => removeItemFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
