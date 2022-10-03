import React from "react";

const QuizAnswers = ({ quizState, handleCurrentValue }) => {
  return (
    <div className="quiz-answers">
      {quizState.answers
        ? quizState.answers.map((res, i) => (
            <div
              className="quiz-answer"
              onClick={handleCurrentValue(res)}
              key={i}
            >
              {res}
            </div>
          ))
        : "Empty"}
    </div>
  );
};

export default QuizAnswers;
