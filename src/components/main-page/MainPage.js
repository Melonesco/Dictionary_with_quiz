import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <h2 className="main-title">Dictionary</h2>
      <div className="button-start">
        <Link to="/field">Start</Link>
      </div>
    </div>
  );
};

export default MainPage;
