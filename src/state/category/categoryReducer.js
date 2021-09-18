import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
} from "./categoryConstrants";

export const CategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case GET_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
