import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';

const Home = lazy(() => import('./pages/Home'));

/* =====================
   Application Shell
===================== */

/** Defines the global layout and client-side route structure. */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = window.setTimeout(() => setIsLoading(false), 500);

    return () => window.clearTimeout(loaderTimeout);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}
