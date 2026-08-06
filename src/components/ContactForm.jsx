import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { HiEnvelope } from 'react-icons/hi2';

/* =====================
   EmailJS Contact Form
===================== */

const projectTypes = [
  'Business Website',
  'Restaurant Website',
  'Clinic or Hospital Website',
  'Hotel Website',
  'Landing Page',
  'Dashboard',
  'Website Redesign',
  'Other',
];
const budgetOptions = ['Under $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500+', 'Not sure yet'];
const fieldClassName =
  'rounded-md border border-line bg-ink px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue focus:ring-2 focus:ring-blue/20';

/** Sends a validated project enquiry through EmailJS. */
export default function ContactForm({ onToast }) {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      onToast('Email service is not configured yet. Please use WhatsApp or email.', 'error');
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      onToast('Thank you. Your project enquiry has been sent.', 'success');
    } catch {
      onToast('Your message could not be sent. Please try WhatsApp or email.', 'error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-panel/60 p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Name" name="from_name" autoComplete="name" placeholder="Your name" />
          <FormField
            label="Email"
            name="reply_to"
            type="email"
            autoComplete="email"
            placeholder="you@business.com"
          />
        </div>
        <FormField
          label="Business Name"
          name="business_name"
          autoComplete="organization"
          placeholder="Your business name"
        />
        <SelectField label="Project Type" name="project_type" options={projectTypes} />
        <SelectField label="Estimated Budget" name="budget" options={budgetOptions} />
        <FormField
          label="Message"
          name="message"
          placeholder="Tell me about your goals, timeline, or website idea..."
          multiline
        />
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? (
            <>
              <Spinner />
              Sending enquiry...
            </>
          ) : (
            <>
              <HiEnvelope />
              Send Enquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/** Provides consistent accessible input markup for the enquiry form. */
function FormField({ label, multiline = false, ...fieldProps }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      {multiline ? (
        <textarea required rows="5" className={`resize-none ${fieldClassName}`} {...fieldProps} />
      ) : (
        <input required className={fieldClassName} {...fieldProps} />
      )}
    </label>
  );
}

/** Renders a labelled select field for controlled project choices. */
function SelectField({ label, name, options }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select required name={name} defaultValue="" className={fieldClassName}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Indicates an in-progress EmailJS form submission. */
function Spinner() {
  return (
    <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  );
}
