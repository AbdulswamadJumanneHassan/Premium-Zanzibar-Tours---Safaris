import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackHomeButton() {
  const location = useLocation();

  return (
    <AnimatePresence>
      {location.pathname !== '/' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed left-1/2 top-24 z-40 -translate-x-1/2"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-charcoal shadow-sm backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back Home
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
