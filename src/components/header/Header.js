import React from "react";
import { Link } from "react-router-dom";
import Monkey from "../../images/monkey.ico";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <img src={Monkey} alt="img" />
      </label>
      <div className="header-inner">
        <h2>Dictionary</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dictionary">Dictionary</Link>
          </li>
          <li>
            <Link to="/quiz">Repeat words</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
