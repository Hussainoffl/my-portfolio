import {
  HiChatBubbleLeftRight,
  HiCodeBracketSquare,
  HiRocketLaunch,
  HiSquares2X2,
} from 'react-icons/hi2';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

/* =====================
   Development Process
===================== */

const processSteps = [
  [
    '01',
    'Discover',
    'I learn about your business, customers, goals, and the job your website needs to do.',
    HiChatBubbleLeftRight,
  ],
  [
    '02',
    'Plan',
    'I shape the content structure and interface direction around a clear visitor journey.',
    HiSquares2X2,
  ],
  [
    '03',
    'Build',
    'I develop the responsive frontend with clean components, fast performance, and care for detail.',
    HiCodeBracketSquare,
  ],
  [
    '04',
    'Launch',
    'I test the experience across devices, polish the final details, and prepare the site to go live.',
    HiRocketLaunch,
  ],
];

/** Makes the engagement process transparent before a prospective client contacts the developer. */
export default function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-[#090f1c] py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="How I work"
          title="A straightforward process from first call to launch."
          description="You stay close to the work without being buried in technical details."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([number, title, description, Icon]) => (
            <ProcessStep
              key={number}
              number={number}
              title={title}
              description={description}
              Icon={Icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Displays one step in the four-stage website development process. */
function ProcessStep({ number, title, description, Icon }) {
  return (
    <article className="relative rounded-lg border border-line bg-panel/50 p-6">
      <p className="text-sm font-bold text-blue">{number}</p>
      <Icon className="mt-8 text-3xl text-slate-400" />
      <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
