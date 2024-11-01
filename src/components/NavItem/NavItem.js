import React from "react";
import "./NavItem.css";

const NavItem = ({ display, onClick, isSelected }) => {

  let classes = "nav-item";
  if(isSelected){
    classes = classes + " selected";
  }

  return (
    <div className={classes} onClick={onClick}>
      {display}
    </div>
  );
};

export default NavItem;
