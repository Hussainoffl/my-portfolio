import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi2';
import Button from '../components/Button';
import Container from '../components/Container';
import ProfileIllustration from '../components/ProfileIllustration';

/* =====================
   Hero Section
===================== */

const contentAnimation = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

/** Introduces the developer and presents the portfolio's main actions. */
export default function Hero() {
  return (
    <section id="home" className="grid-glow relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(59,130,246,.20),transparent_22rem),radial-gradient(circle_at_18%_70%,rgba(14,116,144,.13),transparent_26rem)]" />
      <Container className="grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.12fr_.88fr]">
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
    <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
      <motion.p
        variants={contentAnimation}
        className="mb-5 flex items-center gap-2 text-sm font-medium text-blue"
      >
        <span className="h-px w-8 bg-blue" />
        Independent frontend developer
      </motion.p>
      <motion.h1
        variants={contentAnimation}
        className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl"
      >
        Hi, I'm Syed Hussain.
        <br />I build websites that make your{' '}
        <span className="text-blue">business look established.</span>
      </motion.h1>
      <motion.p
        variants={contentAnimation}
        className="mt-7 max-w-xl text-lg leading-8 text-slate-400"
      >
        I help local businesses and growing teams turn their website into a clear, credible reason
        for customers to get in touch.
      </motion.p>
      <motion.div variants={contentAnimation} className="mt-9 flex flex-wrap gap-3">
        <Button href="#projects">See My Work</Button>
        <Button href="#contact" variant="secondary" showIcon={false}>
          Start a Project
        </Button>
      </motion.div>
    </motion.div>
  );
}
