import axios from "axios";
import { PERSOLNA_DETAILS_GET } from "../Type/type";

export const getApidataPaymentMethod = (data) => async (dispatch) => {
    // console.log("id11:------------",id )
    try {
      const res = await axios.post(
        `https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/purchase/adduserInfo`,data,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
      );
      // console.log("purchase :", purchase);
      dispatch({ type: PERSOLNA_DETAILS_GET, data: res.data});
      return res.data.purchase;
    } catch (err) {
      console.log(err);
    }
  };