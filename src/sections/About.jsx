import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { HiArrowRight, HiCheckCircle, HiCodeBracketSquare, HiCpuChip, HiSparkles } from 'react-icons/hi2';
import Container from '../components/Container';

/* =====================
   About Section
===================== */

const introPhrases = [
  'I build modern websites that feel fast, sharp, and reliable.',
  'I turn product ideas into polished web experiences.',
  'I ship freelance work with precision and calm confidence.',
];

const tabContent = {
  who: {
    title: 'Who I am',
    body: 'I’m Syed Hussain — a freelance web developer who blends clean UI, modern tooling, and product thinking to build sites people actually enjoy using.',
  },
  do: {
    title: 'What I do',
    body: 'I design and build responsive web apps, landing pages, and storefront experiences with React, Node.js, and a sharp eye for detail.',
  },
  hire: {
    title: 'Why hire me',
    body: 'Because I care about the details that matter: speed, clarity, polish, and delivery that feels effortless from the first click to the final handoff.',
  },
};

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Vite', icon: SiVite },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST APIs', icon: HiCodeBracketSquare },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: HiCpuChip },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
];

const cardClass =
  'rounded-[24px] border border-white/10 bg-panel/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-blue/30 hover:shadow-[0_16px_50px_rgba(59,130,246,0.12)]';

function TypingIntro() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = introPhrases[currentPhraseIndex];

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        window.setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % introPhrases.length);
        return;
      }

      setDisplayedText((prev) => (isDeleting ? prev.slice(0, -1) : prev + currentPhrase[prev.length]));
    }, isDeleting ? 45 : 70);

    return () => window.clearTimeout(timeout);
  }, [currentPhraseIndex, displayedText, isDeleting]);

  return (
    <h2 className="font-display text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-[2.6rem]">
      {displayedText}
      <span className="ml-1 inline-block w-[0.6ch] animate-pulse text-blue">|</span>
    </h2>
  );
}

function TiltCard({ children, className = '' }) {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 4;
    const rotateX = ((0.5 - y / bounds.height) * 4);

    setRotation({ rotateX, rotateY });
  };

  const resetRotation = () => setRotation({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      style={{ transformStyle: 'preserve-3d', rotateX: rotation.rotateX, rotateY: rotation.rotateY }}
      className={`${cardClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Presents an interactive, confident introduction to the developer and their craft. */
export default function About() {
  const [activeTab, setActiveTab] = useState('who');
  const [activeSkill, setActiveSkill] = useState('React');

  const activeSkillDetail = skillGroups
    .flatMap((group) => group.items)
    .find((item) => item.name === activeSkill)?.name;

  return (
    <section id="about" className="relative overflow-hidden border-y border-white/5 bg-[#090f1c] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-8 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-between space-y-5"
          >
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">01 / About me</p>
              <TypingIntro />
              <p className="max-w-xl text-base leading-8 text-slate-400">
                I’m <span className="font-semibold text-white">Syed Hussain</span>, a freelance web developer focused on building fast, high-quality digital experiences that look sharp and feel effortless.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['who', 'do', 'hire'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full border px-3 py-2 text-sm transition-all ${activeTab === tab ? 'border-blue/40 bg-blue/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue/20 hover:text-white'}`}
                  >
                    {tabContent[tab].title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`${cardClass} p-5 sm:p-6`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-blue">
                    <HiSparkles className="text-base" />
                    {tabContent[activeTab].title}
                  </div>
                  <p className="mt-3 leading-8 text-slate-400">{tabContent[activeTab].body}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue/50 hover:bg-blue/20"
                >
                  View projects <HiArrowRight />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:text-white"
                >
                  Let’s talk
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-between"
          >
            <TiltCard className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Interactive stack</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">A sharp toolkit for modern products.</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  <HiCheckCircle className="text-blue" />
                  Responsive
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {skillGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: groupIndex * 0.04 }}
                  >
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(({ name, icon: Icon }, index) => (
                        <motion.button
                          key={name}
                          type="button"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: groupIndex * 0.04 + index * 0.02 }}
                          whileHover={{ y: -2, scale: 1.02 }}
                          onClick={() => setActiveSkill(name)}
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 transition-all ${activeSkill === name ? 'border-blue/40 bg-blue/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue/20 hover:text-white'}`}
                        >
                          <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="grid size-7 place-items-center rounded-full bg-blue/10 text-blue">
                            <Icon className="text-sm" />
                          </motion.span>
                          <span className="text-sm">{name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 text-sm leading-7 text-slate-400">
                Focused on <span className="font-medium text-white">{activeSkillDetail}</span>, clean UI, fast performance, and real-world usability.
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
