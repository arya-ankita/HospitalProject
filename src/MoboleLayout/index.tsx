import React from "react";

import { Outlet } from "react-router-dom";
import HeaderView from "../mobile-component/inc/header/Header.view";

const Layout = () => {
  return (
    <>
      <HeaderView />
      <Outlet />
    </>
  );
};

export default Layout;
