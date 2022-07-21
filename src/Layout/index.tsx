import React from "react";
import Header from "../components/inc/header";
import Footer from "../components/inc/footer";
import { Outlet } from "react-router-dom";

// type data={
//   handleClick:{}
// }
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
