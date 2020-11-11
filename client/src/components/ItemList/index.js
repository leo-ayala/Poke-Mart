import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

import ItemObject from "../ItemObject";
import { QUERY_ITEMS } from "../../utils/queries";
import pokeball from "../../assets/pokeball.gif"

function ItemList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
  
  const { loading, data } = useQuery(QUERY_ITEMS);
  
  useEffect(() => {
    if(data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: data.items
      });
  
      data.items.forEach((item) => {
        idbPromise('items', 'put', item);
      });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // since we're offline, get all of the data from the `items` store
      idbPromise('items', 'get').then((items) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_ITEMS,
          items: items
        });
      });
    }
  }, [data, loading, dispatch]);
  
  
  
  function filterItems() {
    if (!currentCategory) {
      return state.items;
    }
  
    return state.items.filter(item => item.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Our Items:</h2>
      {state.items.length ? (
        <div className="flex-row">
            {filterItems().map(item => (
                <ItemObject
                  key= {item._id}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any items yet!</h3>
      )}
      { loading ? 
      <img src={pokeball} alt="loading" />: null}
    </div>
  );
}

export default ItemList;
