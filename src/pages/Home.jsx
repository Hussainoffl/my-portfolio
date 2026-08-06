import About from '../sections/About';
import Contact from '../sections/Contact';
import Experience from '../sections/Experience';
import FAQ from '../sections/FAQ';
import Hero from '../sections/Hero';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import SocialProof from '../sections/SocialProof';
import WhyChooseMe from '../sections/WhyChooseMe';

/* =====================
   Home Page
===================== */

/** Composes every portfolio section for the main route. */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseMe />
      <SocialProof />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <Experience />
      <FAQ />
      <Contact />
    </main>
  );
}
