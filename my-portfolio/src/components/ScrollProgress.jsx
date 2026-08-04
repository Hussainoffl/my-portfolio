import { motion, useScroll, useSpring } from 'framer-motion';

/* =====================
   Scroll Progress Bar
===================== */

/** Visualizes the visitor's reading position along the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-blue"
      style={{ scaleX }}
    />
  );
}
