import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./userConstranst";

import { Userlogin, Register } from "../../Api/Auth";

export const login = (userdata) => async (dispatch) => {
  try {
    console.log("userrrrrdatatat", userdata);

    dispatch({
      type: LOGIN_REQUEST,
    });

    const result = await Userlogin(userdata);

    console.log("ressultttt is", result);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: result.user,
    });

    localStorage.setItem("user", JSON.stringify(result.user));
    localStorage.setItem("token", JSON.stringify(result.token));
  } catch (er) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location = "/";
};

export const SignUp = (userdata) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQ,
    });
    console.log("rrrrrrrr", userdata);
    const { data } = await Register(userdata);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("token", JSON.stringify(data.token));
  } catch (er) {
    dispatch({
      type: SIGNUP_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
