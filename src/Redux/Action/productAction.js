import axios from "axios";
import { CATEGORY_WISE_PRODUCT, PRODUCT_GET, PRODUCT_GETONE } from "../Type/type";

export const getApidataAllProduct = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/product/getPrdData`,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
      );
      // console.log("resdataprd :", res.data.newPrd);
      dispatch({ type: PRODUCT_GET, data: res.data });
      return res.data.newPrd;
    } catch (err) {
      console.log(err);
    }
  };

  export const getApidataOnePrdData = (id) => async (dispatch) => {
    // console.log("id11:------------",id )
    try {
      const res = await axios.get(
        `https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/product/getId/${id}`,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
      );
      // console.log("resdataprd :", res.data.newPrd);
      dispatch({ type: PRODUCT_GETONE, data: res.data });
      return res.data.newPrd;
    } catch (err) {
      // console.log(err);
    }
  };
  export const getApidataCatWisePrd = (id) => async (dispatch) => {
    // console.log("id11:------------",id )
    try {
      const res = await axios.get(
        `https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/product/getProductByCategoryId/${id}`,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
      );
      console.log("resdatacat-prd :", res.data);
      dispatch({ type: CATEGORY_WISE_PRODUCT, data: res.data });
      return res.data.products;
    } catch (err) {
      // console.log(err);
    }
  };

