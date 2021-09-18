import React from "react";
import { Route } from "react-router-dom";
import ShopLayout from "./../Layout/layout";

const ProductLayoutRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ShopLayout>
          <Component {...props} />
        </ShopLayout>
      )}
    />
  );
};

export default ProductLayoutRoutes;
