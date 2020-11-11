import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_ITEMS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import pokeball from "../assets/pokeball.gif";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ITEMS,
} from "../utils/actions";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentItem, setCurrentItem] = useState({});

  const { loading, data } = useQuery(QUERY_ITEMS);

  const { items, cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id)
  
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        item: { ...currentItem, purchaseQuantity: 1 }
      });
      // if item isn't in the cart yet, add it to the current shopping cart in IndexedDB
      idbPromise('cart', 'put', { ...currentItem, purchaseQuantity: 1 });
    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentItem._id
    });
  
    // upon removal from cart, delete the item from IndexedDB using the `currentItem._id` to locate what to remove
    idbPromise('cart', 'delete', { ...currentItem });
  };
  

  useEffect(() => {
    // already in global store
    if (items.length) {
      setCurrentItem(items.find(item => item._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: data.items
      });
  
      data.items.forEach((item) => {
        idbPromise('items', 'put', item);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('items', 'get').then((indexedItems) => {
        dispatch({
          type: UPDATE_ITEMS,
          items: indexedItems
        });
      });
    }
  }, [items, data, loading, dispatch, id]);

  return (
    <>
      {currentItem ? (
        <div className="container my-1">
          <Link to="/">← Back to Items</Link>

          <h2>{currentItem.name}</h2>

          <p>{currentItem.description}</p>

          <p>
            <strong>Price:</strong>${currentItem.price}{" "}
            <button onClick={addToCart}>
              Add to Cart
            </button>
            <button
              disabled={!cart.find((p) => p._id === currentItem._id)}
              onClick={removeFromCart}>
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentItem.image}`}
            alt={currentItem.name}
          />
        </div>
      ) : null}
      {loading ? <img src={pokeball} alt="loading" /> : null}
    </>
  );
}

export default Detail;
