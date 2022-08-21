import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../screens/Account";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
