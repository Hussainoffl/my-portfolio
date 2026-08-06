import { motion } from 'framer-motion';

/* =====================
   Card Component
===================== */

/** Provides the shared elevated card interaction used across content sections. */
export default function Card({ children, className = '' }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`rounded-lg border border-line bg-panel/70 ${className}`}
    >
      {children}
    </motion.article>
  );
}
