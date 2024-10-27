import React from "react";
import "./Content.css";
import { ReactComponent as Logo } from "../../assets/cons.svg";

const Content = () => (
  <div className="content-container">
    <div className="content-inner">
      <Logo className="cons" /> <br />
      <div style={{opacity: 0.5, fontWeight: "bolder"}}>Site in Contruction</div>
    </div>
  </div>
);

export default Content;
