import React from "react";
import SingleWord from "../single-word/SingleWord";

const DictionaryList = ({ dictionary, setDictionary }) => {
  return (
    <div>
      {dictionary.length > 0
        ? dictionary.map((words, i) => (
            <SingleWord
              key={words.id}
              words={words}
              i={i}
              setDictionary={setDictionary}
              dictionary={dictionary}
            />
          ))
        : "Empty"}
    </div>
  );
};

export default DictionaryList;
