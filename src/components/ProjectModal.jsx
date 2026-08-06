import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowUpRight, HiCheckCircle, HiCodeBracket, HiXMark } from 'react-icons/hi2';

/* =====================
   Project Details Modal
===================== */

/** Shows extra project details without taking visitors away from the portfolio page. */
export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl border border-line bg-panel shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-md bg-ink/70 text-xl text-white backdrop-blur hover:bg-blue"
              aria-label="Close project details"
            >
              <HiXMark />
            </button>
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="aspect-[16/8] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-blue">{project.type}</p>
              <h2
                id="project-modal-title"
                className="mt-2 font-display text-3xl font-semibold text-white"
              >
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-white">Key features</h3>
                  <ul className="mt-3 space-y-2">
                    {project.features?.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <HiCheckCircle className="text-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Technologies</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech?.map((technology) => (
                      <span
                        key={technology}
                        className="rounded bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-5">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="font-semibold text-blue hover:text-blue-300"
                >
                  Discuss a similar project
                </a>
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white"
                >
                  <HiCodeBracket /> GitHub Repository
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white"
                  >
                    <HiArrowUpRight /> Live Demo
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-1.5 font-semibold text-slate-500"
                  >
                    <HiArrowUpRight /> Coming Soon
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
