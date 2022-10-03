import { ADD_WORD, NEXT_QUESTION, RESTART, SELECT_ANSWER } from "./types";
import { QUESTIONS_LENGTH } from "../helpers/constant";
import { LocalStorageService } from "../services/LocalStorageService";

export const addWord = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:2000/words");
    const jsonData = await res.json();
    const dataRandom = jsonData.sort(() => Math.random() - 0.5);
    dataRandom.length = QUESTIONS_LENGTH;
    dispatch({
      type: ADD_WORD,
      data: jsonData,
    });
  };
};

export const initQuiz = () => {
  const currentPage = LocalStorageService.getCurrentPage();
  return {
    type: "INIT_QUIZ",
    payload: +currentPage,
  };
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

export const restart = () => {
  return {
    type: RESTART,
  };
};

export const selectAnswer = (answerText) => {
  return {
    type: SELECT_ANSWER,
    payload: answerText,
  };
};
