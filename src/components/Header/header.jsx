import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { logout } from "../../state/user/userAction";

const Header = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const { userInfo: user } = useSelector((state) => state.userLogin);
  const cartStore = useSelector((state) => state.cart);
  const { cartItem } = cartStore;

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const ItemCount = cartItem
      .map((item) => item.qty)
      .reduce((a, b) => a + b, 0);
    // eslint-disable-next-line
    setCount(ItemCount);
    // eslint-disable-next-line
  }, [cartStore]);
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.left}>
          <Link to="/" className={style.brand}>
            <img src="/images/logo/logo.jpg" alt="logo" />
          </Link>
          <div className={style.mbl_icon}>
            <div
              className={style.searchbtn}
              onClick={() => {
                handleClick();
              }}
            >
              <SearchIcon className={style.icon} />
            </div>
          </div>
        </div>

        <div className={show ? style.active : style.right}>
          <div className={style.search}>
            <form>
              <div className={style.input_box}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search Anything..."
                />
                <button>
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
          <div className={style.links}>
            <ul>
              <li className={style.profile}>
                <div className={style.heading}>
                  <span className={style.tittle}>Account</span>
                  <ExpandMoreIcon className={style.arrow} />
                </div>
                {!user && (
                  <ul className={style.profile_list}>
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/account">My Account</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wish List</Link>
                    </li>
                  </ul>
                )}
                {user && (
                  <ul className={style.profile_list}>
                    <li>
                      <Link to="/profile" className={style.name}>
                        {user.name}
                      </Link>
                    </li>
                    <li>
                      <Link to="/order">Order</Link>
                    </li>
                    <li>
                      <Link to="/profile">My Account</Link>
                    </li>
                    <li>
                      <Link to="/wishlist" onClick={() => logout()}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/#"
                  className={style.carlist}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#sidebarRight"
                  aria-controls="sidebarRight"
                >
                  <ShoppingCartIcon className={style.cart} />
                  <span>{count}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
