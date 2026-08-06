import { useEffect, useState } from 'react';

/* =====================
   Scroll State Hook
===================== */

/** Tracks whether the page has passed a specific vertical position. */
export default function useScrollState(scrollThreshold = 24) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > scrollThreshold);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState);

    return () => window.removeEventListener('scroll', updateScrollState);
  }, [scrollThreshold]);

  return hasScrolled;
}
