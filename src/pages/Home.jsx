import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Business from '../sections/Business';

/* =====================
   Home Page
===================== */

/** Composes every portfolio section for the main route. */
export default function Home() {
  return (
    <main>
      <Hero />
      <Business />
      <Contact />
    </main>
  );
}
