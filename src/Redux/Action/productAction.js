import axios from "axios";
import {
  CATEGORY_WISE_PRODUCT,
  PRODUCT_GET,
  PRODUCT_GETONE,
  USER_HISTORY,
} from "../Type/type";
import ApiClient from "../../method/ApiClient";

// export const getApidataAllProduct = () => async (dispatch) => {
//   try {
//     const res = await ApiClient.get(`product/getPrdData`, {
//       // headers: {
//       //   "ngrok-skip-browser-warning": "69420",
//       //   "Content-Type": "application/json",
//       // },
//     });
//     dispatch({ type: PRODUCT_GET, data: res });
//     return res.newPrd;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getApidataAllProduct = (id = null,...queryParams) =>
//   async (dispatch) => {
//     try {
//       let url = "product/getPrdData";
//       if (id) {
//         url += `?id=${id}`;
//       }
//       // const queryString = queryParams
//       //   .filter((param) => param !== null && param !== undefined)
//       //   .map((param) => `${param.key}=${param.value}`)
//       //   .join("&");
//       // if (queryString) {
//       //   url += `?${queryString}`;
//       // }
//       const res = await ApiClient.get(url);
//       dispatch({ type: PRODUCT_GET, payload: res.newPrd });
//       return res.newPrd;
//     } catch (err) {
//       console.log(err);
//     }
//   };

// export const getApidataAllProduct = (id = null, queryParams = {}) => async (dispatch) => {
//   try {
//     console.log("queryParams=>",queryParams);
//     let url = "product/getPrdData";
//     const queryString = Object.keys(queryParams)
//       .map((key) => `${key}=${queryParams[key]}`)
//       .join("&");

//     if (id) {
//       url += `?id=${id}`;
//       if (queryString) {
//         url += `&${queryString}`;
//       }
//     } else if (queryString) {
//       url += `?${queryString}`;
//     }

//     const res = await ApiClient.get(url);
//     dispatch({ type: PRODUCT_GET, payload: res.newPrd });
//     return res.newPrd;
//   } catch (err) {
//     console.error("Error fetching products:", err);

//   }
// };

export const getApidataAllProduct =
  (id = null, queryParams = {}) =>
  async (dispatch) => {
    try {
      let url = "product/getPrdData";

      if (Object.keys(queryParams).length > 0) {
        const queryString = Object.entries(queryParams)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join("&");

        url += url.includes("?") ? `&${queryString}` : `?${queryString}`;
      }

      const res = await ApiClient.get(url);
      dispatch({ type: PRODUCT_GET, payload: res.newPrd });
      return res.newPrd;
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

export const getUserData = (uId) => async(dispatch)=>{
  
  try {
    if (uId) {
      const res=ApiClient.get(`purchase/getOnePurchaseInfo/${uId}`).then((response) => {
        // setGetData(response.purchases)
        dispatch({ type: USER_HISTORY ,payload:response.purchases });
        
        return response.purchases
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getApidataOnePrdData = (id) => async (dispatch) => {
  try {
    const res = await ApiClient.get(`product/getId/${id}`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "69420",
      //   "Content-Type": "application/json",
      // },
    });
    dispatch({ type: PRODUCT_GETONE, data: res });
    return res.newPrd;
  } catch (err) {}
};

// export const getApidataCatWisePrd = (id) => async (dispatch) => {
//   try {
//     const res = await ApiClient.get(`product/getProductByCategoryId/${id}`, {
//       // headers: {
//       //   "ngrok-skip-browser-warning": "69420",
//       //   "Content-Type": "application/json",
//       // },
//     });
//     dispatch({ type: CATEGORY_WISE_PRODUCT, data: res });
//     return res.products;
//   } catch (err) {
//     // console.log(err);
//   }
// };
