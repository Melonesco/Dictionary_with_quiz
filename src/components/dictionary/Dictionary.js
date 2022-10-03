import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DictionaryList from "../dictionary-list/DictionaryList";
import "./Dictionary.css";

const Dictionary = () => {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/words")
      .then((res) => res.json())
      .then((data) => setDictionary(data));
  }, []);

  return (
    <div className="dictionary">
      <h2 className="dictionary-title">Dictionary</h2>
      <p className="dictionary-info">
        Words: {dictionary.length > 0 ? dictionary.length : 0}
      </p>
      <DictionaryList dictionary={dictionary} setDictionary={setDictionary} />
      <div className="dictionary-button">
        <Link to="/field">Add</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Dictionary;
