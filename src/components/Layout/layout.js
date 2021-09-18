import React from "react";
import Header from "../../components/Header/header";
import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.main}>{children}</div>
    </>
  );
};
export default Layout;
