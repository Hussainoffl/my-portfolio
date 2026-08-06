import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi2';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

/* =====================
   Experience Section
===================== */

/** Shows the current frontend role in a compact chronological timeline. */
export default function Experience() {
  return (
    <section className="border-y border-white/5 bg-[#090f1c] py-24 sm:py-32">
      <Container>
        <SectionTitle eyebrow="05 / Experience" title="Always learning, always shipping." />
        <div className="relative max-w-3xl border-l border-blue/40 pl-8 sm:pl-12">
          <span className="absolute -left-[7px] top-1 size-3 rounded-full bg-blue ring-8 ring-[#090f1c]" />
          <ExperienceEntry />
        </div>
      </Container>
    </section>
  );
}

/** Renders the content for the current professional experience entry. */
function ExperienceEntry() {
  return (
    <motion.article
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-lg border border-line bg-panel/60 p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-blue">2026 - Present</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">
            Frontend Developer
          </h3>
        </div>
        <HiBriefcase className="text-2xl text-slate-500" />
      </div>
      <p className="mt-4 max-w-xl leading-7 text-slate-400">
        Building React applications and modern business websites, with a focus on responsive
        layouts, clean UI systems, and smooth product experiences.
      </p>
    </motion.article>
  );
}
