import { React } from "react";
import "./Nav.css";
import dp from "../../assets/dp.jpg";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

const Nav = () => {

  const navItems = [
    { label: "Summary" },
    { label: "Education" },
    { label: "Work Experience" },
    { label: "Projects" },
    { label: "Contact" },
  ];

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <img className="dp-container" src={dp} alt="profile-picture" />
        <div className="nav-plate">
          {navItems.map((item, index) => (
            <Link to={"/"+ (item.label === "Work Experience" ? "workex" : item.label)} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <NavItem
                key={index}
                label={item.label}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
