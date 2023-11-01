import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import TopBar from "./components/topbar";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Newspaper from "./components/newspaper";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/periodico/:name" element={<Newspaper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




