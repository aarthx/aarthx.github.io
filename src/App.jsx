import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Sobre from './Components/Sobre';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projects />} />
          </Routes>
        </main>
        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;
