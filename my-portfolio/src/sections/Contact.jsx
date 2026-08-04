import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiEnvelope, HiLink } from 'react-icons/hi2';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { siteInformation } from '../constants/site';

/* =====================
   Contact Section
===================== */

const contactChannels = [
  {
    label: 'Email',
    value: siteInformation.email,
    href: `mailto:${siteInformation.email}`,
    Icon: HiEnvelope,
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
];

/** Combines direct profile links with a simple client-side contact form. */
export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="06 / Contact"
            title="Have a project in mind?"
            description="Tell me about what you're building. I am open to frontend roles, freelance work, and thoughtful collaborations."
          />
          <ContactChannels />
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

/** Renders available contact channels from the central contact data. */
function ContactChannels() {
  return (
    <div className="space-y-3">
      {contactChannels.map(({ label, value, href, Icon }) => (
        <a
          key={label}
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
            <span className="mt-0.5 block text-sm text-slate-200 group-hover:text-white">
              {value}
            </span>
          </span>
          <HiLink className="ml-auto text-slate-600" />
        </a>
      ))}
    </div>
  );
}

/** Manages the form confirmation state without introducing unnecessary state management. */
function ContactForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-panel/60 p-6 sm:p-8">
      <div className="grid gap-5">
        <FormField label="Name" name="name" autoComplete="name" placeholder="Your name" />
        <FormField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
        <FormField
          label="Message"
          name="message"
          placeholder="A little about your project..."
          multiline
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Send Message <HiEnvelope />
        </button>
        {hasSubmitted && (
          <p role="status" className="text-sm text-emerald-400">
            Thanks. Your message is ready to send.
          </p>
        )}
      </div>
    </form>
  );
}

/** Provides consistent accessible input markup for the contact form. */
function FormField({ label, multiline = false, ...fieldProps }) {
  const sharedClassName =
    'rounded-md border border-line bg-ink px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue focus:ring-2 focus:ring-blue/20';
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      {multiline ? (
        <textarea required rows="5" className={`resize-none ${sharedClassName}`} {...fieldProps} />
      ) : (
        <input required className={sharedClassName} {...fieldProps} />
      )}
    </label>
  );
}
