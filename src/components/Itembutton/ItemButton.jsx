import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Cart } from "../../state/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style from "./item.module.css";

const ItemButton = ({ item }) => {
  const [Item, setItem] = useState({ ...item, qty: 0 });

  const cartStore = useSelector((state) => state.cart);
  const { cartItem } = cartStore;

  const dispatch = useDispatch();

  useEffect(() => {
    const newItem = { ...Item };

    if (cartItem.length > 0) {
      // eslint-disable-next-line
      cartItem.map((item) => {
        // console.log("neeeeee", Item.qty);

        if (item.item === newItem._id) {
          return (newItem.qty = item.qty);
        } else if (item.item === newItem.item) {
          return (newItem.qty = item.qty);
        }
      });
    }
    // eslint-disable-next-line
    setItem(newItem);
    // eslint-disable-next-line
  }, [cartStore]);

  const IncrementCart = (item) => {
    const items = { ...item, qty: item.qty + 1 };
    dispatch(Cart(items));
  };
  const DecrementCart = (item) => {
    const items = { ...item, qty: item.qty - 1 };
    dispatch(Cart(items));
  };

  return (
    <>
      {Item.qty === 0 && (
        <div className={style.cartbtn}>
          <button
            onClick={() => {
              IncrementCart(Item);
            }}
          >
            Add to Cart
          </button>
        </div>
      )}
      {Item.qty > 0 && (
        <div className={style.editbtn}>
          <span
            onClick={() => {
              DecrementCart(Item);
            }}
          >
            <RemoveIcon />
          </span>
          <button>{Item.qty}</button>
          <span
            onClick={() => {
              IncrementCart(Item);
            }}
          >
            <AddIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default ItemButton;
