import { motion } from 'framer-motion';

/* =====================
   Section Title
===================== */

/** Creates a consistent animated heading block for each portfolio section. */
export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-blue">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </motion.header>
  );
}
