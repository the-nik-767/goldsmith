import axios from "axios";
import { CATEGORY_GET } from "../Type/type";

// export const getApidata = () => {
//     return (dispatch) => {
//       axios.get("127.0.0.1:4000/category/getCateData").then((res) => {
//         console.log("res in getApidata",res)
//         dispatch({ type: CATEGORY_GET, data: res });
//       });
//     };
//   };

// export const getApidata = () => {
//     return async (dispatch) => {
//       try {
//         const res = await axios.get("http://127.0.0.1:4000/category/getCateData");
//         dispatch({ type: CATEGORY_GET, data: res.data });
//         console.log('resdata ',res)
//         return res.data;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//   };

export const getApidata = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://3d9b-2405-201-200c-d09d-bdd0-d27a-6f72-a7f6.ngrok-free.app/category/getCateData"  ,{headers:{ "ngrok-skip-browser-warning": "69420" ,'Content-Type':'application/json'} } 
    );
    console.log("resdata :", res);
    dispatch({ type: CATEGORY_GET, data: res.data });
    return res.data.newCate;
  } catch (err) {
    console.log(err);
  }
};
