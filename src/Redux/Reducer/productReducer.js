import { PRODUCT_GET, PRODUCT_GETONE } from "../Type/type";

const initialState = {
    data: [],
    
  };

export const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case PRODUCT_GET: {
        if (action.data && action.data.newPrd && Array.isArray(action.data.newPrd)) {
          return {
            ...state,
            data: action.data.newPrd,
          };
        } else {
          return state;
        }
      }

    default: {
      return state;
    }
  }
};