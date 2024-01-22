import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route exact path="/" element={<Home />} />
          <Route path="/periodico/:name" element={<Newspaper />} />
        </Routes>
        <Home />
      </div>
    </Router>
  );
}

export default App;