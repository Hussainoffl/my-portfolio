import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

/* =====================
   Button Component
===================== */

const buttonVariants = {
  primary: 'bg-blue text-white shadow-[0_12px_32px_rgba(59,130,246,.24)] hover:bg-blue-400',
  secondary: 'border border-line bg-white/3 text-slate-100 hover:border-blue/60 hover:bg-blue/10',
};

/** Renders a consistent animated link button used for primary site actions. */
export default function Button({ children, href, variant = 'primary', showIcon = true }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${buttonVariants[variant]}`}
    >
      {children}
      {showIcon && <HiArrowUpRight className="text-lg" />}
    </motion.a>
  );
}
