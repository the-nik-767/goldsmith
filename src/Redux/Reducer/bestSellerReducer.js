import { BESTSELLER_GET} from "../Type/type";

const initialState = {
    data: [],
  };

export const bestSellerReducer = (state = initialState, action) => {
  switch (action.type) {

    // case CATEGORY_GET: {
    //   return Array.isArray(action.data) ? action.data : [];
    // }
    case BESTSELLER_GET: {
        if (action.data && action.data.newCate && Array.isArray(action.data.newCate)) {
          return {
            ...state,
            data: action.data.newCate,
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
