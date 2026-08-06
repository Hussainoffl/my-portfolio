import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';

/* =====================
   Skills Section
===================== */

/** Displays the frontend development skills in a responsive animated grid. */
export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="02 / Toolkit"
          title="The tools I use to bring interfaces to life."
          description="A practical frontend toolkit for building, shipping, and improving modern web products."
        />
        <SkillGrid />
      </Container>
    </section>
  );
}

export function SkillGrid({ items = skills, className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 ${className}`.trim()}>
      {items.map(([skillName, SkillIcon], index) => (
        <SkillCard key={skillName} name={skillName} Icon={SkillIcon} delay={index * 0.035} />
      ))}
    </div>
  );
}

/** Renders a single skill item with entrance and hover interactions. */
function SkillCard({ name, Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.25 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-panel/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-blue/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]"
    >
      <motion.span
        whileHover={{ rotate: 8, scale: 1.08 }}
        className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-blue/10"
      >
        <Icon className="text-lg text-blue" />
      </motion.span>
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </motion.div>
  );
}
