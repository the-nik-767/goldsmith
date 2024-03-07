import axios from "axios";
import { BESTSELLER_GET, CATEGORY_GET, NEWCOLLECTION_GET } from "../Type/type";
import  ApiClient  from "../../ApiClient";

export const getApidata = () => async (dispatch) => {
  try {
    const res = await ApiClient.get(
      "category/getCateData",
      // {
      //   headers: {
      //     "ngrok-skip-browser-warning": "69420",
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: CATEGORY_GET, data: res });
    return res.newCate;
  } catch (err) {
    console.log(err);
  }
};

export const getApidataBestSeller = () => async (dispatch) => {
  try {
    const res = await ApiClient.get(
      "category/getCateDataByType/bestseller",
      // {
      //   headers: {
      //     "ngrok-skip-browser-warning": "69420",
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: BESTSELLER_GET, data: res });
    return res.newCate;
  } catch (err) {
    console.log(err);
  }
};

export const getApidataNewCollection = () => async (dispatch) => {
  try {
    const res = await ApiClient.get(
      "category/getCateDataByType/newCollection",
      // {
      //   headers: {
      //     "ngrok-skip-browser-warning": "69420",
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: NEWCOLLECTION_GET, data: res });
    return res.newCate;
  } catch (err) {
    console.log(err);
  }
};
