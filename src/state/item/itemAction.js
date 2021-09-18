import { ITEM_REQUEST, ITEM_SUCCESS, ITEM_FAIL } from "./itemConstrants";
import { GetItemByCategory } from "../../Api/items";

export const GetItem = (categorie) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_REQUEST,
    });
    const { data } = await GetItemByCategory(categorie);

    dispatch({
      type: ITEM_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: ITEM_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
