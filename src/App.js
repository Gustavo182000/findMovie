import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/navBar/NavBar";
import './App.css'
import Rotas from "./components/rotas/Rotas";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Rotas/>
      </Router>
    </div>
  );
}

export default App;
