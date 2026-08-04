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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(([skillName, SkillIcon], index) => (
            <SkillCard key={skillName} name={skillName} Icon={SkillIcon} delay={index * 0.035} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Renders a single skill item with entrance and hover interactions. */
function SkillCard({ name, Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-3 rounded-lg border border-line bg-panel/50 p-4 transition-colors hover:border-blue/50"
    >
      <Icon className="text-2xl text-blue transition-transform group-hover:scale-110" />
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </motion.div>
  );
}
