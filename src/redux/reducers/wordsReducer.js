import { ADD_WORD, NEXT_QUESTION, RESTART, SELECT_ANSWER } from "../types";
import { shuffleAnswers } from "../../helpers/Helpers";
import { LocalStorageService } from "../../services/LocalStorageService";

const initialState = {
  words: [],
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  allCorrectAnswers: [],
  answers: "",
  currentAnswer: "",
};

export const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD: {
      return {
        ...state,
        words: [...action.data],
        answers: shuffleAnswers(action.data[0], action.data),
      };
    }
    case "INIT_QUIZ": {
      return {
        ...state,
        currentQuestionIndex: action.payload || 0,
      };
    }
    case SELECT_ANSWER: {
      const correctAnswerCount =
        action.payload === state.words[state.currentQuestionIndex].secondWord
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }

    case NEXT_QUESTION: {
      const showResults = state.currentQuestionIndex === state.words.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const currentPage = showResults
        ? LocalStorageService.setCurrentPage(0)
        : LocalStorageService.setCurrentPage(currentQuestionIndex);
      const answers = showResults
        ? []
        : shuffleAnswers(state.words[currentQuestionIndex], state.words);
      const correctAnswerCount =
        action.payload === state.words[state.currentQuestionIndex].secondWord
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      const selectShowResults = showResults
        ? LocalStorageService.setResults(correctAnswerCount)
        : showResults;
      return {
        ...state,
        currentQuestionIndex,
        currentPage,
        showResults,
        selectShowResults,
        answers,
        currentAnswer: "",
      };
    }
    case RESTART: {
      return {
        initialState,
        currentQuestionIndex: 0,
        correctAnswerCount: 0,
      };
    }
    default:
      return state;
  }
};
