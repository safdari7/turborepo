import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import AppRoutes from "../routes/AppRoutes";

export default function Index() {
  return (
    <>
      <SideBarMobile />
      <section className="header-wrapper">
        <section className="desktop-nav">
          <Nav />
        </section>
        <Header />
      </section>

      <section className="content-wrapper">
        <div className="desktop-sidebar">
          <SideBar />
        </div>
        <div className="content">
          <AppRoutes />
        </div>
      </section>

      <section className="mobile-nav-wrapper">
        <Nav />
      </section>
    </>
  );
}
