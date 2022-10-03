import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz">
      <div>
        <Link to="/field" className="quiz-back">
          Back
        </Link>
        <h2 className="quiz-title">Repeat words</h2>
        <Link className="quiz-btn" to="/quiz-start">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
