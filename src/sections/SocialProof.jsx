import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiStar } from 'react-icons/hi2';

import Container from '../components/Container';

/* =====================
   Social Proof Section
===================== */

const metrics = [
  { value: '100%', label: 'Responsive layouts' },
  { value: '8+', label: 'Business demos' },
  { value: 'Fast', label: 'Frontend delivery' },
  { value: '1:1', label: 'Direct communication' },
];
const testimonials = [
  {
    quote:
      'The structure feels clear from the first screen. I could immediately see how it would help a customer choose the business.',
    name: 'Restaurant Owner',
    business: 'Hospitality concept project',
  },
  {
    quote:
      'The focus on patient journeys and trust signals is exactly what a modern clinic website should get right.',
    name: 'Clinic Manager',
    business: 'Healthcare concept project',
  },
  {
    quote:
      'It feels polished without being complicated. The work puts the important business information in the right place.',
    name: 'Local Business Owner',
    business: 'Service business concept project',
  },
];

/** Combines measurable frontend priorities with rotating client-perspective feedback. */
export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const intervalId = window.setInterval(
      () => setActiveTestimonial((current) => (current + 1) % testimonials.length),
      6000,
    );
    return () => window.clearInterval(intervalId);
  }, []);
  const testimonial = testimonials[activeTestimonial];
  const showPrevious = () =>
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveTestimonial((current) => (current + 1) % testimonials.length);

  return (
    <section className="border-y border-white/5 bg-[#090f1c] py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-lg border border-line bg-panel/60 p-5"
              >
                <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="relative rounded-lg border border-line bg-panel/60 p-6 sm:p-8">
            <div className="mb-5 flex gap-1 text-blue">
              {Array.from({ length: 5 }).map((_, index) => (
                <HiStar key={index} />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                className="font-display text-xl leading-8 text-white sm:text-2xl"
              >
                “{testimonial.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-200">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.business}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                  className="grid size-9 place-items-center rounded-md border border-line text-slate-300 hover:border-blue hover:text-white"
                >
                  <HiArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                  className="grid size-9 place-items-center rounded-md border border-line text-slate-300 hover:border-blue hover:text-white"
                >
                  <HiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
