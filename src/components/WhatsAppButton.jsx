import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

/* =====================
   WhatsApp Contact Button
===================== */

const message =
  'Hello Syed,\n\nI found your portfolio and I would like to discuss a website for my business.';

/** Renders a persistent WhatsApp shortcut when a contact number is configured. */
export default function WhatsAppButton() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!whatsappNumber) return null;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Start a WhatsApp conversation"
      className="fixed bottom-4 right-4 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_12px_30px_rgba(37,211,102,.35)] sm:bottom-5 sm:right-5"
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2.2, repeat: Infinity }}
      whileHover={{ scale: 1.12, rotate: 6 }}
      whileTap={{ scale: 0.94 }}
    >
      <FaWhatsapp />
    </motion.a>
  );
}
