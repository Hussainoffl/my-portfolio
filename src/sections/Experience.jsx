import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle, HiBriefcase } from 'react-icons/hi2';
import { useState } from 'react';
import Container from '../components/Container';

const NAVBAR_OFFSET = 'pt-[88px]';

/* =====================
   Experience Section
===================== */

const experiences = [
  {
    id: 'freelancer',
    company: 'Freelancer',
    title: 'Self-Employed Full Stack Developer',
    date: 'January 2026 — Present',
    description:
      'Designing and developing modern business websites and full stack web applications for clients. Managing projects from planning and UI implementation to backend development, deployment, and maintenance.',
    responsibilities: [
      'Business Website Development',
      'MERN Stack Applications',
      'REST API Integration',
      'Website Deployment',
      'Responsive UI Development',
      'Client Communication',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'React Native',
      'Tailwind CSS',
      'Git',
      'GitHub',
      'Vite',
      'REST APIs',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'synapsespark',
    company: 'SynapseSpark | IT & Software Solutions',
    title: 'Full Stack Developer',
    date: 'May 2026 — Present',
    description:
      'Developing production-ready web and mobile applications using the MERN stack and React Native. Building scalable frontend interfaces, backend APIs, integrating databases, and collaborating with the development team to deliver reliable software solutions.',
    responsibilities: [
      'React Web Development',
      'React Native Development',
      'Backend API Development',
      'MongoDB Integration',
      'REST API Integration',
      'Team Collaboration',
      'Bug Fixing & Optimization',
      'Git Version Control',
    ],
    technologies: [
      'React',
      'React Native',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Git',
      'GitHub',
      'Tailwind CSS',
      'Vite',
    ],
  },
];

/* Stagger container for right-panel content sections */
const panelVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const activeItem = experiences[activeExperience];

  return (
    <section
      id="experience"
      className={`border-y border-white/5 bg-[#090f1c] ${NAVBAR_OFFSET} flex items-center py-3 sm:py-4 lg:min-h-[calc(100vh-88px)] lg:py-3`}
    >
      <Container className="w-full">
        <div className="grid items-start gap-8 lg:grid-cols-[340px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="sticky top-28 h-fit rounded-[24px] border border-white/10 bg-panel/60 p-6 backdrop-blur"
          >
            <div className="mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue">
                04 / EXPERIENCE
              </p>
              <h2 className="mt-2 font-display text-[1.35rem] font-semibold leading-tight text-white">
                Developer Experience
              </h2>
              <p className="mt-2 text-[0.95rem] leading-6 text-slate-400">
                Currently working as a Full Stack Developer while building freelance projects for businesses using modern web technologies.
              </p>
            </div>

            <div className="relative pl-2">
              <div className="absolute left-[13px] top-2 bottom-2 w-px bg-white/10" />
              <div className="space-y-4">
                {experiences.map((item, index) => {
                  const isActive = activeExperience === index;

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveExperience(index)}
                      onFocus={() => setActiveExperience(index)}
                      whileHover={{ y: -2, scale: 1.01, x: isActive ? 0 : 4 }}
                      transition={{ duration: 0.2 }}
                      className={`group relative w-full rounded-2xl border-l-2 p-3 text-left transition-all duration-200 ${isActive ? 'border-blue/60 bg-blue/10 pl-3 shadow-[0_0_0_1px_rgba(59,130,246,0.16)]' : 'border-transparent bg-transparent pl-3 hover:bg-white/[0.03]'}`}
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -left-2 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-blue/20 blur-2xl"
                        />
                      )}
                      <span
                        className={`absolute left-0 top-4 size-3 -translate-x-1/2 rounded-full border transition-all duration-200 ${isActive ? 'border-blue/50 bg-blue shadow-[0_0_0_5px_rgba(59,130,246,0.16)]' : 'border-white/20 bg-transparent group-hover:bg-blue/40'}`}
                      />
                      <div className="relative ml-3">
                        <p className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {item.company}
                        </p>
                        <p className={`mt-1 text-sm transition-colors ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                          {item.date}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22 }}
                className="flex min-h-[620px] w-full flex-col rounded-[24px] border border-white/10 bg-panel/80 p-8"
              >
                <motion.div variants={panelVariants} initial="hidden" animate="show">
                  <motion.div variants={itemVariants} className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-white">{activeItem.title}</h3>
                        {activeItem.date.includes('Present') && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/30 bg-blue/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-blue">
                            <span className="relative flex size-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
                              <span className="relative inline-flex size-1.5 rounded-full bg-blue" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-400">{activeItem.company}</p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                        <HiBriefcase className="text-base text-blue" />
                        {activeItem.date}
                      </div>
                    </div>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="mt-5 max-w-xl text-[15px] leading-8 text-slate-400"
                  >
                    {activeItem.description}
                  </motion.p>

                  <motion.div variants={itemVariants} className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Responsibilities
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {activeItem.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                        >
                          <HiCheckCircle className="text-base text-blue" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Gradient fade divider */}
                  <motion.div
                    variants={itemVariants}
                    aria-hidden
                    className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-blue/40 to-transparent"
                  />

                  <motion.div variants={itemVariants} className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Technologies
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {activeItem.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ y: -2, scale: 1.02 }}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-all duration-200 hover:border-blue/40 hover:bg-blue/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25)]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-center  gap-3">
                    <p className="text-sm text-slate-400">Interested in working together?</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue/50 hover:bg-blue/20"
                      >
                        Let's Talk <HiArrowRight />
                      </a>
                      <a
                        href="#projects"
                        className="text-sm font-medium text-blue transition-all hover:text-white"
                      >
                        View Projects <HiArrowRight className="ml-1 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section >
  );
}
