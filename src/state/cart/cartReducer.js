import { CART_ITEM_ADD } from "./cartConstrants";

export const CartReducer = (
  state = { cartItem: [], shippingAddress: {}, paymentmethod: {} },
  action
) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      let items = action.payload;
      const exit = state.cartItem.find((item) => item.item === items.item);

      if (exit) {
        const newItem = state.cartItem.map((item) => {
          return item.item === exit.item ? items : item;
        });
        // const filterItem = newItem.filter((item) => item.qty !== 0);
        // console.log("Filttt", filterItem);
        return {
          ...state,
          cartItem: newItem,
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
        };
      }

    default:
      return state;
  }
};
