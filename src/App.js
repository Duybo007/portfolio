import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motio, useScroll, useTransform } from "framer-motion";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <section id='top'>
        <Hero/>
      </section>

      <section id='about'>
        <About/>
      </section>

      <section id='skills'>
        <Skills/>
      </section>

      <section id='projects'>
        <Projects/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
