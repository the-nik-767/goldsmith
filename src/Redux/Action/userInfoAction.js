import { json, useNavigate } from "react-router-dom";
import ApiClient from "../../method/ApiClient";
import { USER_INFO } from "../Type/type";

export const addApiDataINUser = (data) => async (dispatch) => {
  try {
    const response = await ApiClient.post("user/login", data);
    let { token } = response;
    if (response.error === "Invalid email or password") {
      alert(
        "Invalid email or password. Please try with a different email or password."
      );
    } else {
      alert("Login successful.");
    }
    localStorage.setItem("token", token);
    localStorage.setItem("UserLoginData", JSON.stringify(response));

    token = JSON.stringify(token);

    dispatch({ type: USER_INFO, data: response });


    return response;
  } catch (err) {
  }
};
