import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes exact />
    </BrowserRouter>
  );
}

export default App;
