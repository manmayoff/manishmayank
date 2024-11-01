import { React, useState } from "react";
import "./Nav.css";
import dp from "../../assets/dp.jpg";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

const Nav = () => {

  const navItems = [
    { display: "Summary", label: "summary" },
    { display: "Education", label: "education" },
    { display: "Work Experience", label: "workex" },
    { display: "Projects", label: "projects"},
    { display: "Contact", label: "contact" },
  ];


  const [page, setPage] = useState("Summary");

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <img className="dp-container" src={dp} alt="profile-picture" />
        <div className="nav-plate">
          {navItems.map((item, index) => (
            <Link to={"/"+ (item.label)} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <NavItem
                key={index}
                display={item.display}
                onClick={() => setPage(item.label)}
                isSelected={page === item.label}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
