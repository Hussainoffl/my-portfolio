import { AnimatePresence, motion } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2';

/* =====================
   Toast Notification
===================== */

/** Displays a short success or error message after contact form activity. */
export default function Toast({ message, type = 'success' }) {
  const isSuccess = type === 'success';
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          role="status"
          className={`fixed bottom-5 left-5 z-[70] flex max-w-sm items-center gap-3 rounded-lg border px-4 py-3 text-sm shadow-xl ${isSuccess ? 'border-emerald-500/30 bg-emerald-950 text-emerald-100' : 'border-rose-500/30 bg-rose-950 text-rose-100'}`}
        >
          {isSuccess ? (
            <HiCheckCircle className="shrink-0 text-xl" />
          ) : (
            <HiExclamationCircle className="shrink-0 text-xl" />
          )}
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
