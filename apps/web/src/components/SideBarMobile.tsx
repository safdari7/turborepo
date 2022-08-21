import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

export default function SideBarMobile() {
  const [show, setShow] = useState(false);

  // hide slide menu after click out side of slide
  useEffect(() => {
    window.document.addEventListener("click", (event) => {
      const sidebar = document.querySelector("#sidebar") as HTMLElement;
      const menutoggler = document.querySelector("#menutoggler") as HTMLElement;
      if (
        !sidebar.contains(event.target as Node) &&
        !menutoggler.contains(event.target as Node)
      ) {
        setShow(false);
      }
    });
  }, []);

  return (
    <section className="sidebar-wrapper">
      <div className={`sidebar ${show ? "show" : "hide"}`} id="sidebar">
        <SideBar />
      </div>
      <span
        id="menutoggler"
        className={show ? `show toggle-menu` : `hide toggle-menu`}
        onClick={() => {
          setShow(!show);
        }}
      >
        Menu
      </span>
    </section>
  );
}
