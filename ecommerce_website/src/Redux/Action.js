import { SET_DATA } from "./ActionType";
import { ADD_TO_CART } from "./ActionType";
import { REMOVE_FROM_CART } from "./ActionType";
import { UPDATE_QUANTITY_IN_CART } from "./ActionType";
import { UPDATE_TOTAL_ITEMS } from "./ActionType";
import {UPDATE_TOTAL_QUANTITY } from "./ActionType";
import { UPDATE_SEARCH_ITEMS } from "./ActionType";

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (updatedProduct) => {
  return {
    type: REMOVE_FROM_CART,
    payload: updatedProduct,
  };
};

export const updateQuantityInCart = (productId, quantity) => {
  return {
    type: UPDATE_QUANTITY_IN_CART,
    payload: {
      productId,
      quantity,
    },
  };
};
export const updateQuantity = (quantity) => {
  return {
    type: UPDATE_TOTAL_ITEMS,
    payload: quantity
  };
};
export const updateTotalQuantity = (totalQuantity) => {
  return {
    type: UPDATE_TOTAL_QUANTITY,
    payload: totalQuantity
  };
};

export const updateSearchItems=(filteredItems)=>{
  return {
    type: UPDATE_SEARCH_ITEMS,
    payload: filteredItems

  }
}
