import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
          <Navbar />
          <DarkModeToggle />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
