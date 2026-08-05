import { useState } from 'react';

/* =====================
   Clipboard Hook
===================== */

/** Copies a value to the system clipboard and exposes a short-lived success state. */
export default function useCopyToClipboard() {
  const [copiedValue, setCopiedValue] = useState('');

  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(''), 1800);
  };

  return { copiedValue, copyToClipboard };
}
