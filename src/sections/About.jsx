import { motion } from 'framer-motion';
import { HiCheckCircle, HiCodeBracketSquare } from 'react-icons/hi2';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

/* =====================
   About Section
===================== */

const strengths = [
  'Clean, intentional UI',
  'Responsive by default',
  'Performance-minded builds',
  'Reliable communication',
];

/** Shares the developer's frontend focus and working principles. */
export default function About() {
  return (
    <section id="about" className="border-y border-white/5 bg-[#090f1c] py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionTitle
          eyebrow="01 / About me"
          title="Design-aware development, built for real people."
          description="I'm Syed, a frontend developer focused on translating ideas and designs into clear, responsive web experiences."
        />
        <AboutDetails />
      </Container>
    </section>
  );
}

/** Presents supporting biography, strengths, and primary technical focus. */
function AboutDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6 text-slate-400"
    >
      <p className="leading-8">
        Over the past few years of learning and building, I've developed a strong preference for
        interfaces that feel considered at every screen size. I care about the details that make a
        site easy to use, from readable type to predictable interactions.
      </p>
      <p className="leading-8">
        My core focus is React development, with Vite and Tailwind CSS helping me turn polished
        concepts into fast, maintainable websites.
      </p>
      <div className="grid gap-3 pt-2 sm:grid-cols-2">
        {strengths.map((strength) => (
          <div
            key={strength}
            className="flex items-center gap-2 text-sm font-medium text-slate-200"
          >
            <HiCheckCircle className="text-lg text-blue" />
            {strength}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 rounded-lg border border-line bg-panel/70 p-5">
        <HiCodeBracketSquare className="text-4xl text-blue" />
        <div>
          <p className="font-display text-2xl font-semibold text-white">React-first</p>
          <p className="mt-1 text-sm">
            Building useful interfaces with a solid frontend foundation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
