import { CART_ITEM_ADD } from "./cartConstrants";

export const Cart = (item) => (dispatch, getState) => {
  if (item._id) {
    dispatch({
      type: CART_ITEM_ADD,
      payload: {
        item: item._id,
        name: item.name,
        image: item.images[0],
        brand: item.brand,
        price: item.price,
        qty: item.qty,
      },
    });
  } else {
    dispatch({
      type: CART_ITEM_ADD,
      payload: {
        item: item.item,
        name: item.name,
        image: item.image,
        price: item.price,
        qty: item.qty,
      },
    });
  }

  const exitItem = getState().cart.cartItem;
  const filterItem = exitItem.filter((itm) => itm.qty !== 0);
  localStorage.setItem("cartItem", JSON.stringify(filterItem));
};
