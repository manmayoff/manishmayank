import React from "react";
import "./Content.css";
import { ReactComponent as Logo } from "../../assets/cons.svg";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Summary from "../Summary/Summary";
import Education from "../Education/Education";
import WorkEx from "../WorkEx/WorkEx";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Content = () => (
  <div className="content-container">
    <div className="content-inner">
      <div className="englebert-regular">
        <Routes>
          <Route path="/" element={<Navigate to="/summary" replace />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/education" element={<Education />} />
          <Route path="/workex" element={<WorkEx />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default Content;
