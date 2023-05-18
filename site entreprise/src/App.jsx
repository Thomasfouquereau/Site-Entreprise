import './App.css'
import React from 'react'
import { Route, Routes } from "react-router-dom";

import Accueil from './Accueil/Accueil';
import Offre from './Offre/Offre';
import Type_De_site_Factory from './Type_De_Site/Type_De_site_Factory';
import Contact from './Contact/Contact';
import Projet from './Projet/Projetnav';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projet" element={<Projet/>} />
        <Route path="/Offre" element={<Offre />} />
        <Route path="/entreprise" element={<h1>A-TechPro</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Offre/*" element={<Type_De_site_Factory/>} />
      </Routes>
    </div>
  )
}

export default App
