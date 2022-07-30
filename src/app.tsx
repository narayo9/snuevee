import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import SignInPage from "./pages/SignInPage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </HashRouter>
  );
};

function render() {
  ReactDOM.render(<App />, document.body);
}

render();
