/* =====================
   Container Component
===================== */

/** Keeps section content aligned to the same responsive content width. */
export default function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>;
}
