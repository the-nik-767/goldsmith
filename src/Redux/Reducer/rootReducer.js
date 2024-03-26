import { combineReducers } from "redux";
import {cartReducer} from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { bestSellerReducer } from "./bestSellerReducer";
import { NewCollectionReducer } from "./NewCollectionReducer";
import { getOneProduct } from "./getOneProduct";
import { categoryProductReducer } from "./categoryProductreducer";
import { paymentReducer } from "./paymentReducer";
import { loadingReducer } from "./loadingReducer";
import { userInfoReducer } from "./userInfoReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    bestseller:bestSellerReducer,
    newcollection:NewCollectionReducer,
    product: productReducer,
    oneproduct:getOneProduct,
    // categorywiseproduct:categoryProductReducer,
    payment:paymentReducer,
    loading:loadingReducer,
    userinfo:userInfoReducer,
})
