import React from "react";
import "./NavItem.css";

const NavItem = ({label, onClick}) => (
  <div className="nav-item" onClick={onClick}>
    {label}
  </div>
);

export default NavItem;