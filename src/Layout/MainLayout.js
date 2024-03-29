//main view of application
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" overflow-hidden w-screen h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
