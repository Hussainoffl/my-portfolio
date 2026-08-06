import { motion } from 'framer-motion';

/* =====================
   Page Loader
===================== */

/** Provides a brief branded loading state while the application initializes. */
export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-ink"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="grid size-14 place-items-center rounded-full border-2 border-blue border-t-transparent"
      >
        <span className="font-display text-sm font-bold text-white">SH</span>
      </motion.div>
    </motion.div>
  );
}
