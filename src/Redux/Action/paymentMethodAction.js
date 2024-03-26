import axios from "axios";
import { PERSOLNA_DETAILS_GET } from "../Type/type";
import ApiClient from "../../method/ApiClient";

export const getApidataPaymentMethod = (data) => async (dispatch) => {
  try {
    const res = await ApiClient.post('purchase/adduserInfo', data, null);
    dispatch({ type: PERSOLNA_DETAILS_GET, payload: res });
    return res.purchase;
  } catch (err) {
    console.log(err);
  }
};
