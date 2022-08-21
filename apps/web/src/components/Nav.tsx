import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="mobile-nav">
      <li className="li">
        <Link to="/">Home</Link>
      </li>
      <li className="li">
        <Link to="/account">Account</Link>
      </li>
      <li className="li">
        <Link to="settings">settings</Link>
      </li>
    </ul>
  );
}
