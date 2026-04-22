import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
        <Navbar />
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
  );
}

export default App;
