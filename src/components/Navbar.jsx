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
    ? 'border-b border-white/8 bg-ink/80 shadow-[0_8px_28px_rgba(2,6,23,.2)] backdrop-blur-xl'
    : 'bg-ink/20 backdrop-blur-sm';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${headerClassName}`}>
      <nav
        className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-5"
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
          className="hidden min-h-11 items-center rounded-md bg-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 md:inline-flex"
          href="#contact"
        >
          Let's talk
        </a>
        <button
          className="grid size-11 place-items-center rounded-md border border-line bg-panel/60 text-xl text-white transition-colors hover:border-blue/60 hover:bg-blue/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-line bg-panel/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              onClick={onLinkClick}
              className="flex min-h-11 items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            onClick={onLinkClick}
            href="#contact"
            className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
          >
            Let's talk
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
