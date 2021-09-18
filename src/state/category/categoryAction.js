import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
} from "./categoryConstrants";

import { GetAllCategory } from "../../Api/category";

export const Getcategory = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORY_REQUEST,
    });
    const { data } = await GetAllCategory();

    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: GET_CATEGORY_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
