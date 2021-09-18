import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./userConstranst";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("HHHHH");

      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      console.log("HHHHHLLLLOGIN SUCCESS", action.payload);
      return {
        loading: false,
        userInfo: action.payload,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const SignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_REQ:
      return {
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
