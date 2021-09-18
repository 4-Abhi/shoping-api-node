import { useEffect, useState } from "react";
import style from "./menu.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const Menu = () => {
  const [count, setCount] = useState(0);
  const cartStore = useSelector((state) => state.cart);
  const { cartItem } = cartStore;

  useEffect(() => {
    if (cartItem) {
      const itemsCount = cartItem
        .map((item) => item.qty)
        .reduce((a, b) => a + b, 0);

      setCount(itemsCount);
    }
  }, [cartItem]);
  return (
    <div className={style.menu}>
      <div className={style.container}>
        <ul>
          <li className={style.list}>
            <Link to="/">
              <HomeIcon />
              <p>Home</p>
            </Link>
          </li>
          <li className={style.list}>
            <Link to="/">
              <FormatListBulletedIcon />
              <p>Category</p>
            </Link>
          </li>
          <li className={style.list}>
            <a
              className={style.cartIcon}
              href="/#"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarRight"
              aria-controls="sidebarRight"
            >
              <ShoppingCartIcon />
              <span className={style.cartvalue}>{count}</span>
              <p>Cartlist</p>
            </a>
          </li>

          <li className={style.list}>
            <Link to="/profile">
              <PersonIcon />
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
