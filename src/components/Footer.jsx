import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi2';

import { siteInformation } from '../constants/site';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090f1c] py-8">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            {siteInformation.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Full Stack Developer • MERN Stack • React Native
          </p>
          <p className="mt-3 text-xs text-slate-500">
            © 2026 {siteInformation.name}. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-blue hover:text-white"
          >
            Back to Top
            <HiArrowUp />
          </a>

          <a
            href={siteInformation.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-slate-300 transition hover:border-blue hover:bg-blue hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href={siteInformation.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-slate-300 transition hover:border-blue hover:bg-blue hover:text-white"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </Container>
    </footer>
  );
}