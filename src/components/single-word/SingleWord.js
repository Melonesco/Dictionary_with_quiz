import React from "react";
import "./SingleWord.css";

const SingleWord = ({ words, i, setDictionary, dictionary }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    fetch(`http://localhost:2000/words/${id}`, {
      method: "DELETE",
    }).then((res) => console.log("Successful"));
    const currentIndex = dictionary.findIndex((index) => index.id === id);
    const deleteWordFromDictionary = [
      ...dictionary.slice(0, currentIndex),
      ...dictionary.slice(currentIndex + 1),
    ];
    setDictionary(deleteWordFromDictionary);
  };

  return (
    <form onSubmit={handleDelete} className="dictionary-block">
      <div className="dictionary-id">{i + 1}.</div>
      <input
        className="dictionary-text"
        name="firstName"
        value={words.firstWord}
        disabled
      />
      <input className="dictionary-text" value={words.secondWord} disabled />
      <input
        type="text"
        name="id"
        value={words.id}
        style={{ display: "none" }}
        disabled
      />
      <input type="submit" className="dictionary-delete" value="x" />
    </form>
  );
};

export default SingleWord;
