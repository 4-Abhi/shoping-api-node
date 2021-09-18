import { ITEM_REQUEST, ITEM_SUCCESS, ITEM_FAIL } from "./itemConstrants";

export const ItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEM_REQUEST:
      return {
        loading: true,
      };
    case ITEM_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      };
    case ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
