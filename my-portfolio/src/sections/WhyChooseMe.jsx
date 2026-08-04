import { HiCheckCircle, HiDevicePhoneMobile, HiRocketLaunch, HiSparkles } from 'react-icons/hi2';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

/* =====================
   Why Choose Me Section
===================== */

const clientBenefits = [
  [
    'Built for your customers',
    'Every page is planned around the questions your customers need answered before they contact you.',
    HiSparkles,
  ],
  [
    'Excellent on every screen',
    'Your website will feel clear and professional for customers on phones, tablets, and desktops.',
    HiDevicePhoneMobile,
  ],
  [
    'Fast and focused',
    'I build lean React websites that load quickly and guide visitors toward the right action.',
    HiRocketLaunch,
  ],
];

/** Explains the practical benefits business owners receive from the work. */
export default function WhyChooseMe() {
  return (
    <section className="border-y border-white/5 bg-[#090f1c] py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle
          eyebrow="Built for business"
          title="A website should make your business feel easy to choose."
          description="I focus on the details that build confidence before a visitor ever sends an enquiry."
        />
        <div className="grid gap-5">
          {clientBenefits.map(([title, description, Icon], index) => (
            <article
              key={title}
              className="flex gap-5 rounded-lg border border-line bg-panel/60 p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-blue/10 text-xl text-blue">
                <Icon />
              </span>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-blue">
                  0{index + 1}
                </p>
                <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{description}</p>
              </div>
            </article>
          ))}
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <HiCheckCircle className="text-lg text-blue" />
            Clear process. Direct communication. Thoughtful execution.
          </p>
        </div>
      </Container>
    </section>
  );
}
