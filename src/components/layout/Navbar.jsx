import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const navItems = ['Home', 'Destinations', 'Tours', 'Safaris', 'Gallery', 'About', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/85 text-charcoal shadow-glass glass-backdrop' : 'text-white'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="/#home" className="flex items-center gap-4 text-white transition hover:opacity-90">
          <img src={Logo} alt="Premium Zanzibar Tours & Safaris logo" className="h-20 w-auto rounded-3xl border border-white/20 bg-white/5 p-3 object-contain sm:h-24" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map(item => (
            item === 'Contact' || item === 'Tours' ? (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-[0.2em] transition hover:text-gold"
              >
                {item}
              </Link>
            ) : (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-[0.2em] transition hover:text-gold"
              >
                {item}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`hidden rounded-full border border-white/30 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
              isScrolled ? 'bg-ocean text-white border-ocean' : 'bg-white/10 text-white hover:bg-white/20'
            } md:inline-flex`}
          >
            Tailor Your Trip
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white transition hover:bg-white/20 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/10 bg-white/95 text-charcoal shadow-glass glass-backdrop md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8">
            {navItems.map(item => (
              item === 'Contact' || item === 'Tours' ? (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="rounded-3xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition hover:bg-ocean/10"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="rounded-3xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition hover:bg-ocean/10"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ocean px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-ocean/90"
            >
              Tailor Your Trip
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
