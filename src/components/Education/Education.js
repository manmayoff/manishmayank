import React from "react";
import "./Education.css";

const Education = () => (
  <p className="education-container">
    <ul>
      <li>
        <div className="college">Bachlor of Technology, IIT Kanpur</div>
        <div className="maj">Major: Computer Science and Engineering</div>
        <div className="maj">Minor: Industrial Management and Engineering</div>
        <br />
        <div className="coursework">Relevant coursework:</div>
        <div className="courses">
          Real Analysis, Multivariable calculus, Linear Algebra, Ordinary
          Differential Equations, Partial Differential Equations, Abstract
          Algebra, Logic for Computer Science, Computer Networks, Operating
          Systems, Computer Organization, Data Structures and Algorithms,
          Advanced Algorithms, Theory of Computation, Introduction to Machine
          Learning, Probabilistic Machine Learning, Statistical Learning Theory,
          Introduction to Stochastic Processes, Advanced Statistical methods for
          Business Analytics
        </div>
      </li>
    </ul>
  </p>
);

export default Education;
