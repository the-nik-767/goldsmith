import {
  CURRENT_FILTER_TYPE,
  CURRENT_PRODUCT_FILTER,
  PRODUCT_GET,
  USER_HISTORY,
} from "../Type/type";

const initialState = {
  data: [],
  filterType: "",
  userData: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_GET: {
      return {
        ...state,
        data: payload,
      };
    }
    case CURRENT_PRODUCT_FILTER: {
      return {
        ...state,
        filterType: payload,
      };
    }
    case USER_HISTORY:{
      return{
        ...state,
        userData: payload
      }
    }
    default: {
      return state;
    }
  }
};
