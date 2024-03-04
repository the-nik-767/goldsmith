import { NEWCOLLECTION_GET } from "../Type/type";

const initialState = {
    data: [],
  };

export const NewCollectionReducer = (state = initialState, action) => {
  switch (action.type) {

      case NEWCOLLECTION_GET: {
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