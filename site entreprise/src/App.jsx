import './App.css'
import React from 'react'
import { Route, Routes } from "react-router-dom";

import Accueil from './Accueil/Accueil';
import Offre from './Offre/Offre';
import Type_De_site_Factory from './Type_De_Site/Type_De_site_Factory';
import Contact from './Contact/Contact';
import Projet from './Projet/Projetnav';
import ProjetLandingPage from './Projet/ProjetFactory/ProjetLandingPage';
import ProjetSiteVitrine from './Projet/ProjetFactory/ProjetSiteVitrine';
import ProjetECommerce from './Projet/ProjetFactory/ProjetECommerce';
import ProjetApplicationWeb from './Projet/ProjetFactory/ProjetApplicationWeb';
import ProjetCreatifCoding from './Projet/ProjetFactory/ProjetCreatifCoding';
import A_TechPro from './A-TechPro/A-TechPro';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projet" element={<Projet/>} />
        <Route path="/Offre" element={<Offre />} />
        <Route path="/entreprise" element={<A_TechPro/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Offre/*" element={<Type_De_site_Factory/>} />
        <Route path="/Projet/Landing-page" element={<ProjetLandingPage/>} />
        <Route path="/Projet/Site-vitrine" element={<ProjetSiteVitrine/>} />
        <Route path="/Projet/E-Commerce" element={<ProjetECommerce/>} />
        <Route path="/Projet/Application-web" element={<ProjetApplicationWeb/>} />
        <Route path="/Projet/Creatif-coding" element={<ProjetCreatifCoding/>} />
      </Routes>
    </div>
  )
}

export default App
