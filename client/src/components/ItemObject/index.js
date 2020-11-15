import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
// import Image from "react-bootstrap/Image";
// import img from "./textBox_copy.png";

function ItemObject(item) {
  const { image, name, _id, price, quantity } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        item: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card">
      <Link to={`/items/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div className= "item_name">
        <div >
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span>₽{price}</span>
      </div>
      <div>
        {/* <div className="layer1 button_box">
          <Image className="" alt="" src={img} width="201" height="53" />
        </div> */}
        <div >
          <button className="cart_button" onClick={addToCart}>Give to Pikachu!</button>
        </div>
      </div>
    </div>
  );
}

export default ItemObject;
