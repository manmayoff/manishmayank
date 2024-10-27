import React from "react";
import "./Nav.css";
import dp from "../../assets/dp.jpg";
import NavItem from "../NavItem/NavItem";

const navItems = [
  { label: "Summary", onClick: () => console.log("Summary clicked") },
  { label: "Education", onClick: () => console.log("Summary clicked") },
  { label: "Work Experience", onClick: () => console.log("Summary clicked") },
  { label: "Projects", onClick: () => console.log("Summary clicked") },
  { label: "Contact", onClick: () => console.log("Contact clicked") },
];

const Nav = () => (
  <div className="nav-container">
    <div className="nav-inner">
      <img className="dp-container" src={dp} />
      <div className="nav-plate">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} onClick={item.onClick} />
        ))}
      </div>
    </div>
  </div>
);

export default Nav;
