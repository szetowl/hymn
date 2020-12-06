import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { GlobalPrivder } from "./context/GlobalState";

function App() {
  return (
    <GlobalPrivder>
      <div className="App">
        <Header />
        <Main />
      </div>
    </GlobalPrivder>
  );
}

export default App;
