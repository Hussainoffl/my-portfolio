import { motion, useReducedMotion } from 'framer-motion';
import { HiCodeBracket, HiCommandLine, HiSparkles } from 'react-icons/hi2';

/* =====================
   Profile Illustration
===================== */

/** Provides a lightweight animated code illustration without loading a profile image. */
export default function ProfileIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
        className="relative aspect-square rounded-[2rem] border border-blue/30 bg-gradient-to-br from-blue/20 via-panel to-cyan-950/40 p-5 shadow-[0_0_80px_rgba(59,130,246,.22)] transition-shadow duration-300 hover:shadow-[0_0_100px_rgba(59,130,246,.32)]"
      >
        <div className="noise absolute inset-0 rounded-[2rem] opacity-35" />
        <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-ink/55 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-blue/15 p-3 text-2xl text-blue">
              <HiCodeBracket />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">
              Frontend craft
            </span>
          </div>
          <div>
            <div className="mb-3 flex gap-2">
              <i className="size-2 rounded-full bg-rose-400" />
              <i className="size-2 rounded-full bg-amber-300" />
              <i className="size-2 rounded-full bg-emerald-400" />
            </div>
            <code className="block overflow-hidden font-mono text-sm leading-7 text-slate-300">
              <span className="hero-code-type">
                const experience = <span className="text-blue">create</span>(cleanUI, fastUX);
              </span>
            </code>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-display text-4xl font-semibold text-white">
              SH<span className="text-blue">.</span>
            </span>
            <HiCommandLine className="text-3xl text-blue" />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -left-5 top-16 grid size-14 place-items-center rounded-lg border border-line bg-panel text-xl text-blue shadow-xl"
      >
        <HiSparkles />
      </motion.div>
    </motion.div>
  );
}
