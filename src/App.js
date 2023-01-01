import React from 'react';
import "./App.css";
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About  from './components/about/About.js';
import Skills from './components/skills/Skills.js';
import Services from './components/services/Services.js';
import Qualification from './components/qualification/Qualification.js';
import Testimonials from './components/testimonials/Testimonials.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import ScrollUp from './components/scrollup/ScrollUp.js';





const App = () => {
  return(

    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
      
      
      
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;

