import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { navigationLinks } from '../constants/navigation';
import useScrollState from '../hooks/useScrollState';

/* =====================
   Navigation Bar
===================== */

/** Handles desktop navigation and the mobile navigation disclosure. */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasScrolled = useScrollState();
  const headerClassName = hasScrolled
    ? 'border-b border-white/8 bg-ink/75 py-3 backdrop-blur-xl'
    : 'py-5';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${headerClassName}`}>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5"
        aria-label="Main navigation"
      >
        <a href="#home" className="font-display text-lg font-bold tracking-normal text-white">
          SH<span className="text-blue">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              className="text-sm text-slate-400 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="hidden rounded-md bg-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 md:block"
          href="#contact"
        >
          Let's talk
        </a>
        <button
          className="grid size-10 place-items-center rounded-md border border-line text-xl text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
        <MobileMenu isOpen={isMenuOpen} onLinkClick={closeMenu} />
      </nav>
    </header>
  );
}

/** Displays the animated navigation panel used on small screens. */
function MobileMenu({ isOpen, onLinkClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute left-5 right-5 top-[68px] rounded-lg border border-line bg-panel p-3 shadow-2xl md:hidden"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              onClick={onLinkClick}
              className="block rounded-md px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
