import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-grow min-h-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
