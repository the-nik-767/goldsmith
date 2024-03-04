import { IS_LOADING_FALSE, IS_LOADING_TRUE } from "../Type/type";

const initialState = {
   
    isLoading: false,
  };

export const loadingReducer = (state = initialState, action) => {
  // console.log("action",action)
  switch (action.type) {

    case IS_LOADING_TRUE: {
      
          return {
            ...state,
            data: action.payload,
          };
        }
    
    case IS_LOADING_FALSE: {
       
          return {
            ...state,
            data: action.payload,
          };
        } 
      
    
    default: {
      return state;
    }
  }
};