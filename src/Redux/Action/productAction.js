import axios from "axios";
import {
  CATEGORY_WISE_PRODUCT,
  PRODUCT_GET,
  PRODUCT_GETONE,
} from "../Type/type";
import ApiClient from "../../ApiClient";

export const getApidataAllProduct = () => async (dispatch) => {
  try {
    const res = await ApiClient.get(`product/getPrdData`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "69420",
      //   "Content-Type": "application/json",
      // },
    });
    // console.log("resdataprd :", res.data.newPrd);
    dispatch({ type: PRODUCT_GET, data: res });
    return res.newPrd;
  } catch (err) {
    console.log(err);
  }
};

export const getApidataOnePrdData = (id) => async (dispatch) => {
  // console.log("id11:------------",id )
  try {
    const res = await ApiClient.get(`product/getId/${id}`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "69420",
      //   "Content-Type": "application/json",
      // },
    });
    // console.log("resdataprd :", res.data.newPrd);
    dispatch({ type: PRODUCT_GETONE, data: res });
    return res.newPrd;
  } catch (err) {
    // console.log(err);
  }
};
export const getApidataCatWisePrd = (id) => async (dispatch) => {
  // console.log("id11:------------",id )
  try {
    const res = await ApiClient.get(`product/getProductByCategoryId/${id}`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "69420",
      //   "Content-Type": "application/json",
      // },
    });
    console.log("resdatacat-prd :", res.data);
    dispatch({ type: CATEGORY_WISE_PRODUCT, data: res });
    return res.products;
  } catch (err) {
    // console.log(err);
  }
};
