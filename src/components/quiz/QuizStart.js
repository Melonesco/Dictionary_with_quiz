import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addWord,
  initQuiz,
  nextQuestion,
  restart,
  selectAnswer,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import QuizAnswers from "../quiz-answers/QuizAnswers";
import "./Quiz.css";

const QuizStart = () => {
  const dispatch = useDispatch();
  const quizState = useSelector((state) => state.wordsReducer);

  useEffect(() => {
    dispatch(addWord());
    dispatch(initQuiz());
  }, [dispatch]);

  const handleCurrentValue = useCallback(
    (e) => () => {
      dispatch(selectAnswer(e));
      dispatch(nextQuestion());
    },
    [dispatch]
  );

  const handleClickRestart = useCallback(() => {
    dispatch(restart());
  }, [dispatch]);

  return (
    <div className="quiz">
      <div>
        <h2 className="quiz-title">Quiz</h2>
        {!quizState.showResults ? (
          <div>
            <div className="quiz-score">
              Question {quizState?.currentQuestionIndex + 1} /{" "}
              {quizState.words?.length}
            </div>
            <div className="quiz-word">
              {quizState.words?.length > 0
                ? quizState?.words[quizState.currentQuestionIndex].firstWord
                : "Empty"}
            </div>
            <QuizAnswers
              quizState={quizState}
              handleCurrentValue={handleCurrentValue}
            />
          </div>
        ) : (
          <div>
            <div>
              You've got {quizState.correctAnswerCount * 10} of {""}
              {quizState.words.length * 10}% right.
            </div>
            <Link onClick={handleClickRestart} className="quiz-btn" to="/quiz">
              Restart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizStart;
