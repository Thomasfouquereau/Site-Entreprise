import './App.css'
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Accueil from './Accueil/Accueil';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projet" element={<h1>Projet</h1>} />
        <Route path="/Offre" element={<h1>Offre</h1>} />
        <Route path="/entreprise" element={<h1>A-TechPro</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  )
}

export default App
