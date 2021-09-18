import React from "react";
import { Switch } from "react-router-dom";
import ProductLayoutRoutes from "../components/LayoutRoutes/layoutRoutes";

// import Addproduct from "./AddProduct";

import Home from "./Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register/Register";
// import { useSelector } from "react-redux";
import NotFound from "./NotFound";
import Profile from "./profile/profile";
import Product from "./product/product";
import CheckOut from "./checkout/checkout";
import Menu from "../components/Menu/Menu";
import CartSidebar from "../components/cartSidebar/cartSidebar";

const Routes = () => {
  // const { userInfo: user } = useSelector((state) => state.userLogin);

  return (
    <>
      <Switch>
        <ProductLayoutRoutes path="/login" exact component={Login} />
        <ProductLayoutRoutes path="/register" exact component={Register} />
        <ProductLayoutRoutes path="/profile" component={Profile} />
        <ProductLayoutRoutes path="/product/:id" component={Product} />
        <ProductLayoutRoutes path="/checkout" component={CheckOut} />
        <ProductLayoutRoutes path="/" exact component={Home} />
        <ProductLayoutRoutes path="/" component={NotFound} />

        {/* <ProductLayoutRoutes path="/addProduct" component={Addproduct} /> */}
      </Switch>
      <CartSidebar />
      <Menu />
    </>
  );
};
export default Routes;
