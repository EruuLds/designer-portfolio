import './App.css'
import Navbar from './components/layout/Navbar';
import Hero from './components/contents/Hero';
import Section from './components/layout/Section';
import AboutMe from './components/contents/AboutMe';
import Skills from './components/contents/Skills';
import Portfolio from './components/contents/Portfolio';
import ContactMe from './components/contents/ContactMe';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={loading ? 'h-dvh overflow-hidden' : ''}>

      {loading && <Loader />}

      <Hero />
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Section id={"aboutMe"} heading={"Sobre Mí"}>
          <AboutMe />
        </Section>
        <Section id={"skills"} heading={"Habilidades"}>
          <Skills />
        </Section>
        <Section id={"portfolio"} heading={"Portafolio"}>
          <Portfolio />
        </Section>
        <Section id={"contactMe"} heading={"Contacto"}>
          <ContactMe />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App
