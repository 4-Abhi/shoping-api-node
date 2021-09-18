import React from "react";
import Banner from "../components/Banner/banner";
import Category from "../components/Category/category";
import Product from "../components/Product/Product";
import Boxbanner from "../components/Boxbanner/boxbanner";
import News from "../components/News/news";
import Footer from "../components/Footer/footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <div className="wrapper">
        <div className="box_container">
          <div className="row">
            <div className="col-md-6 col-lg-6 ">
              <div className="img_block_left">
                <a href="/">
                  <img src="images/offer/block-1.jpg" alt="left" />
                  <div className="description">
                    <h4>Tasty Healthy</h4>
                    <h2>Organic Food</h2>
                    <button className="left_btn">SALE UP TO - 15%</button>
                    <span>Shop now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 ">
              <div className="img_block_right">
                <a href="/">
                  <img src="images/offer/block-2.jpg" alt="right" />
                  <div className="description_right">
                    <h2>
                      Breakfast <br /> & Lunch
                    </h2>
                    <span>Shop now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />

      <Boxbanner />
      <News />
      <Footer />
    </>
  );
};
export default Home;
