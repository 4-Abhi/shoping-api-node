import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./cart.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import ItemButton from "../Itembutton/ItemButton";

const CartSidebar = () => {
  const cartStore = useSelector((state) => state.cart);
  const { cartItem } = cartStore;
  const [Items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cartItem) {
      const filterItem = cartItem.filter((item) => item.qty !== 0);
      const ItemCount = cartItem
        .map((item) => item.qty !== 0)
        .reduce((a, b) => a + b, 0);
      setCount(ItemCount);
      setItems(filterItem);
    }
  }, [cartItem]);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="sidebarRight"
        aria-labelledby="sidebarRightLabel"
      >
        <div className="offcanvas-header">
          <h4 className={style.header}>Total Items ({count})</h4>
          <button
            type="button"
            className="text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <CloseIcon className={style.close} />
          </button>
        </div>
        <div className={style.body}>
          <div className={style.list}>
            {Items.map((item) => {
              return (
                <div className={style.card} key={item.item}>
                  <img
                    src="https://foodstore.s3.ap-south-1.amazonaws.com/category/milk.png"
                    alt="img"
                  />
                  <div className={style.content}>
                    <h5>{item.name}</h5>

                    <div className={style.main}>
                      <ItemButton item={item} />
                      <div className={style.price}>
                        <span>price</span>
                        &nbsp;
                        <span> {item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.bottom}>
          <Link to="/checkout" className={style.btn}>
            Proceed To CheckOut
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
