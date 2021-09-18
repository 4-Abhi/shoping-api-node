import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="row">
        <div className="col-sm-12 sol-md-12 col-lg-12">
          <div className={style.menu}>
            <div className={style.menu_list}>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/">SHOP</Link>
                </li>
                <li>
                  <Link to="/">BLOG</Link>
                </li>
                <li>
                  <Link to="/">ELECTRONIC</Link>
                </li>
                <li>
                  <Link to="/">CONTACT</Link>
                </li>
              </ul>
              <p>
                *Price Promotions - Due to manufacturer restrictions, select new
                release and other specified products are excluded from price
                promotions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={style.footer_bottom}>
          <div className={style.bottom_container}>
            <div className={style.left}>
              <p>Copyright © 2021 FOODSTORE. All Rights Reserved.</p>
            </div>
            <div className={style.middle}>
              <div className={style.social_icon}>
                <FacebookIcon />
                <YouTubeIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
