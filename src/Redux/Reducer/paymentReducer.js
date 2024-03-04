import { PERSOLNA_DETAILS_GET } from "../Type/type";

const initialState = {
    data: [],
  };

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {

    // case CATEGORY_GET: {
    //   return Array.isArray(action.data) ? action.data : [];
    // }
    case PERSOLNA_DETAILS_GET: {
        if (action.data && action.data && Array.isArray(action.data)) {
          return {
            ...state,
            data: action.data,
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
