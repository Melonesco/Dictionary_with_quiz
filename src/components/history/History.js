import React, { useMemo } from "react";
import { LocalStorageService } from "../../services/LocalStorageService";
import { QUESTIONS_LENGTH } from "../../helpers/constant";
import "./History.css";
import { Link } from "react-router-dom";

const History = () => {
  const results = LocalStorageService.getResults();
  const totalActivity = results.reduce((acum, total) => acum + total, 0);

  return (
    <div className="history">
      <div>
        <h2 className="history-title">History</h2>
        <div className="history-results">Your results:</div>
        {results.length > 0
          ? results.map((res, i) => (
              <div className="history-scores" key={i}>
                <span>{i}.</span>
                <p>
                  {res * 10}/{QUESTIONS_LENGTH * 10}%
                </p>
              </div>
            ))
          : "Empty"}
        <div className="history-activity">
          <div>
            Average activity:{" "}
            {results.length > 0
              ? Math.round(totalActivity / results.length) * 10
              : 0}
            /{QUESTIONS_LENGTH * 10}%
          </div>
          <div>Number of results: {results.length}</div>
          <Link className="history-btn" to="/field">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
