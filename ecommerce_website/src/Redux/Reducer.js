import { combineReducers } from "redux";
import {
  SET_DATA,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY_IN_CART,
  UPDATE_TOTAL_ITEMS,
UPDATE_TOTAL_QUANTITY,
UPDATE_SEARCH_ITEMS} from "./ActionType";

// Reducer for data
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

// Reducer for cart
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case UPDATE_QUANTITY_IN_CART:
      const { productId, quantity } = action.payload;
      return state.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    case REMOVE_FROM_CART:
      return action.payload
    default:
      return state;
  }
};


const initialState = {
    totalQuantity:0,
    
}

export const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_TOTAL_ITEMS:
    //   return {
    //     ...state,
    //     quantity: action.payload,
    //   };
      case UPDATE_TOTAL_QUANTITY:
        return {
          ...state,
          totalQuantity: action.payload
        };  
        
    default:
      return state;
  }
}
export const searchReducer = (state=[], action)=>{
    switch(action.type){
        case UPDATE_SEARCH_ITEMS:
            return  action.payload
    default:
        return state
}
}
const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  searchItems:searchReducer,
  totalCartItems: quantityReducer,
});

export default rootReducer;
