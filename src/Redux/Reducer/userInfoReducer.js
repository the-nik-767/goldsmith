import {
    USER_INFO,
  } from "../Type/type";
  
  const initialState = {
    Data: [],
  };
  
  export const userInfoReducer = (state = initialState, { type, data }) => {
    switch (type) {
      case USER_INFO: {
        return {
          ...state,
          Data: data,
        };
      } 
      default: {
        return state;
      }
    }
  };
  