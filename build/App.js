import React from "react";
import TopBar from "./components/topbar";
import NavBar from "./components/navbar";
import Home from "./components/home";
import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;




