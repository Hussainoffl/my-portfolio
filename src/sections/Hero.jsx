import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi2';
import Button from '../components/Button';
import Container from '../components/Container';
import ProfileIllustration from '../components/ProfileIllustration';

/* =====================
   Hero Section
===================== */

const contentAnimation = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

/** Introduces the developer and presents the portfolio's main actions. */
export default function Hero() {
  return (
    <section id="home" className="grid-glow hero-atmosphere relative isolate min-h-screen w-full max-w-screen overflow-hidden pt-20">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-particles absolute inset-0 -z-10" aria-hidden="true" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-8 py-6 pb-20 sm:gap-12 sm:py-8 sm:pb-8 lg:min-h-[calc(100vh-7rem)] lg:gap-14 lg:grid-cols-[1.12fr_.88fr]">
        <HeroContent />
        <ProfileIllustration />
      </Container>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[.15em] text-slate-500 sm:flex"
      >
        Scroll to explore <HiArrowDown className="animate-bounce text-base text-blue" />
      </a>
    </section>
  );
}

/** Contains the animated textual content and calls to action for the hero. */
function HeroContent() {
  return (
    <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.14 }}>
      <motion.p
        variants={contentAnimation}
        className="mb-5 min-w-0 text-sm font-medium text-blue"
      >
        <span className="mr-2 inline-block h-px w-8 align-middle bg-blue" />
        Full Stack Web Developer • React • Node.js • JavaScript
      </motion.p>
      <motion.h1
        variants={contentAnimation}
        transition={{ staggerChildren: 0.16 }}
        className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl"
      >
        <motion.span variants={contentAnimation} className="block">
          Build professional websites that
        </motion.span>
        <motion.span variants={contentAnimation} className="block text-blue">
          help your business grow.
        </motion.span>
      </motion.h1>
      <motion.p
        variants={contentAnimation}
        className="mt-7 max-w-xl text-lg leading-8 text-slate-400"
      >
        I design and develop fast, responsive, and modern websites that help businesses build trust, attract customers, and grow online.
      </motion.p>
      <motion.div variants={contentAnimation} className="mt-6 flex flex-wrap gap-3">
        <Button href="#contact">Get a Free Consultation</Button>
        <Button href="#contact" variant="secondary" showIcon={false}>
          View My Work
        </Button>
      </motion.div>
    </motion.div>
  );
}
