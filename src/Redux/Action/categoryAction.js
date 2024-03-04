import axios from "axios";
import { BESTSELLER_GET, CATEGORY_GET, NEWCOLLECTION_GET } from "../Type/type";

export const getApidata = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/category/getCateData"  ,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: CATEGORY_GET, data: res.data });
    return res.data.newCate;
  } catch (err) {
    console.log(err);
  }
};

export const getApidataBestSeller = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/category/getCateDataByType/bestseller"  ,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: BESTSELLER_GET, data: res.data });
    return res.data.newCate;
  } catch (err) {
    console.log(err);
  }
};

export const getApidataNewCollection = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://bfa8-2405-201-200c-d09d-7dfb-9e13-d9b8-e8db.ngrok-free.app/category/getCateDataByType/newCollection"  ,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
    );
    // console.log("resdata :", res.data.newCate);
    dispatch({ type: NEWCOLLECTION_GET, data: res.data });
    return res.data.newCate;
  } catch (err) {
    console.log(err);
  }
};


