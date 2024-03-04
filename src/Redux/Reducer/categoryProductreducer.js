import { CATEGORY_WISE_PRODUCT } from "../Type/type";

const initialState = {
    data: [],
  };

export const categoryProductReducer = (state = initialState, action) => {
  switch (action.type) {

    // case CATEGORY_GET: {
    //   return Array.isArray(action.data) ? action.data : [];
    // }
    case CATEGORY_WISE_PRODUCT: {
        if (action.data && action.data.products && Array.isArray(action.data.products)) {
          return {
            ...state,
            data: action.data.products,
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
