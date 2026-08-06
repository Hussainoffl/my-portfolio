import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiCheck, HiClipboardDocument, HiEnvelope, HiLink } from 'react-icons/hi2';

import resumeFile from '../assets/syed-hussain-resume.txt?url';
import { siteInformation } from '../constants/site';

/* =====================
   Contact Options
===================== */

/** Renders direct communication, social links, download, and contact copy actions. */
export default function ContactOptions({ copiedValue, onCopy }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const options = [
    {
      label: 'Email',
      value: siteInformation.email,
      href: `mailto:${siteInformation.email}`,
      Icon: HiEnvelope,
    },
    whatsappNumber && {
      label: 'WhatsApp',
      value: 'Message me directly',
      href: `https://wa.me/${whatsappNumber}`,
      Icon: FaWhatsapp,
    },
    {
      label: 'GitHub',
      value: 'github.com/syedhussain',
      href: siteInformation.githubUrl,
      Icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/syedhussain',
      href: siteInformation.linkedinUrl,
      Icon: FaLinkedinIn,
    },
  ].filter(Boolean);

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        {options.map(({ label, value, href, Icon }) => (
          <ContactOption key={label} label={label} value={value} href={href} Icon={Icon} />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <UtilityButton
          label="Copy Email"
          onClick={() => onCopy(siteInformation.email, 'Email address copied.')}
          copied={copiedValue === siteInformation.email}
        />
        <UtilityButton
          label="Copy Phone"
          disabled={!whatsappNumber}
          onClick={() => onCopy(whatsappNumber, 'Phone number copied.')}
          copied={copiedValue === whatsappNumber}
        />
      </div>
      <a
        href={resumeFile}
        download="syed-hussain-resume.txt"
        className="flex items-center justify-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue/50 hover:text-white"
      >
        <HiClipboardDocument className="text-lg text-blue" />
        Download Resume
      </a>
    </div>
  );
}

/** Displays one direct contact destination. */
function ContactOption({ label, value, href, Icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-line bg-panel/50 p-4 transition hover:border-blue/50"
    >
      <span className="grid size-10 place-items-center rounded-md bg-blue/10 text-lg text-blue">
        <Icon />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[.12em] text-slate-500">
          {label}
        </span>
        <span className="mt-0.5 block text-sm text-slate-200 group-hover:text-white">{value}</span>
      </span>
      <HiLink className="ml-auto text-slate-600" />
    </a>
  );
}

/** Shows a copy action and its current success feedback state. */
function UtilityButton({ label, onClick, copied, disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      {copied ? (
        <HiCheck className="text-lg text-emerald-400" />
      ) : (
        <HiClipboardDocument className="text-lg text-blue" />
      )}
      {label}
    </button>
  );
}
