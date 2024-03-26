import { PAYMENT_DETAILS, PERSOLNA_DETAILS_GET } from "../Type/type";

const initialState = {
  data: [],
  paymentData: [],
};

export const paymentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PERSOLNA_DETAILS_GET: {
      return {
        ...state,
        data: payload,
      };
    }
    // case PAYMENT_DETAILS:{
    //   return{
    //     ...state,
    //     paymentData:payload
    //   }
    // }
    case PAYMENT_DETAILS: {
      // const {pmdata}=action.payload;
      return {
        ...state,
        paymentData: payload,
      };
    }

    default: {
      return state;
    }
  }
};
