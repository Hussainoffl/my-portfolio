import { useState } from 'react';

import ContactForm from '../components/ContactForm';
import ContactOptions from '../components/ContactOptions';
import Container from '../components/Container';
import Toast from '../components/Toast';
import SectionTitle from '../components/SectionTitle';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

/* =====================
   Contact Section
===================== */

/** Combines direct contact choices with a focused project enquiry form. */
export default function Contact() {
  const [toast, setToast] = useState(null);
  const { copiedValue, copyToClipboard } = useCopyToClipboard();

  const showToast = (message, type) => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 4000);
  };

  const handleCopy = async (value, successMessage) => {
    try {
      await copyToClipboard(value);
      showToast(successMessage, 'success');
    } catch {
      showToast('Copying is not available in this browser.', 'error');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="Start a conversation"
            title="Ready for a website that works harder for your business?"
            description="Tell me what you need. I will reply with clear next steps and a practical recommendation."
          />
          <ContactOptions copiedValue={copiedValue} onCopy={handleCopy} />
        </div>
        <ContactForm onToast={showToast} />
      </Container>
      <Toast message={toast?.message} type={toast?.type} />
    </section>
  );
}
