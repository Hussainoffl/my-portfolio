import About from '../sections/About';
import Contact from '../sections/Contact';
import Experience from '../sections/Experience';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';

/* =====================
   Home Page
===================== */

/** Composes every portfolio section for the main route. */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
