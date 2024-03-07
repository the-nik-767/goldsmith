import axios from "axios";
import { PERSOLNA_DETAILS_GET } from "../Type/type";
import ApiClient from "../../ApiClient";

export const getApidataPaymentMethod = (data) => async (dispatch) => {
  // console.log("id11:------------",id )
  try {
    const res = await ApiClient.post(`purchase/adduserInfo`, data, 
    {
      // headers: {
      //   "ngrok-skip-browser-warning": "69420",
      //   "Content-Type": "application/json",
      // },
    });
    // console.log("purchase :", purchase);
    dispatch({ type: PERSOLNA_DETAILS_GET, data: res.data });
    return res.data.purchase;
  } catch (err) {
    console.log(err);
  }
};
