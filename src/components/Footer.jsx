import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { siteInformation } from '../constants/site';
import Container from './Container';

/* =====================
   Site Footer
===================== */

/** Displays copyright, return navigation, and social profile links. */
export default function Footer() {
  return (
    <footer className="border-t border-white/7 py-7">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 {siteInformation.name}. Built with React & Vite.</p>
        <div className="flex items-center gap-5">
          <a className="hover:text-white" href="#home">
            Back to top
          </a>
          <a
            className="text-lg hover:text-white"
            href={siteInformation.githubUrl}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="text-lg hover:text-white"
            href={siteInformation.linkedinUrl}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </Container>
    </footer>
  );
}
