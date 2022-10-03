import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/reducers/store";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/header/Header";
import FillUp from "./components/fill-up/FillUp";
import Dictionary from "./components/dictionary/Dictionary";
import Quiz from "./components/quiz/Quiz";
import QuizStart from "./components/quiz/QuizStart";
import History from "./components/history/History";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/field" element={<FillUp />} />
          <Route exact path="/dictionary" element={<Dictionary />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/quiz-start" element={<QuizStart />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
