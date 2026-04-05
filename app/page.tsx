import Navbar from './components/navbar/Navbar.component';
import Hero from './components/hero/Hero.component';
import About from './components/about/About.component';
import Projects from './components/projects/Projects.component';
import Testimonials from './components/testimonials/Testimonials.component';
import Experience from './components/experience/Experience.component';
import TrustedBy from './components/trusted-by/TrustedBy.component';
import Contact from './components/contact/Contact.component';
import Philosophy from './components/philosophy/Philosophy.component';
import { PersonJsonLd } from './components/structured-data/PersonJsonLd';

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <TrustedBy />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
