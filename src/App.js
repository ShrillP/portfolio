import './App.css';

import { useEffect } from 'react';
import Aos from 'aos';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Experience from './components/UI/Experience';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Tech from './components/UI/Tech';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
