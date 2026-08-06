import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

/* =====================
   Frequently Asked Questions
===================== */

const questions = [
  [
    'Who do you build websites for?',
    'I work with independent business owners, local services, clinics, hospitality brands, fitness businesses, schools, real estate teams, and early-stage startups.',
  ],
  [
    'Can you redesign my existing website?',
    'Yes. I can improve an outdated website with a clearer structure, stronger visual hierarchy, and a responsive frontend that feels current.',
  ],
  [
    'Will my website work well on mobile?',
    'Yes. Every layout is designed and tested for mobile first, then refined for tablet and desktop screens.',
  ],
  [
    'Do you provide ongoing maintenance?',
    'Yes. I can help with frontend updates, performance improvements, new pages, and ongoing refinements after launch.',
  ],
];

/** Answers the most common engagement questions for prospective business clients. */
export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionTitle
          eyebrow="Questions, answered"
          title="Everything you need before we start."
          description="A few practical answers for business owners considering a new website."
        />
        <div className="divide-y divide-white/8 border-y border-white/8">
          {questions.map(([question, answer], index) => (
            <FAQItem
              key={question}
              question={question}
              answer={answer}
              isOpen={openQuestion === index}
              onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Renders an accessible expandable question and answer row. */
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium text-white"
      >
        <span>{question}</span>
        <HiChevronDown
          className={`shrink-0 text-xl text-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-7 text-slate-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
