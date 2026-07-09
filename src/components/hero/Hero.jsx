import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '../../assets/spice tour.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,216,0.18),_transparent_35%),linear-gradient(180deg,_rgba(10,77,104,0.75),_rgba(15,23,42,0.7))]" />
      <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="max-w-2xl space-y-6 text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
            <Sparkles size={16} className="text-gold" />
            Curated luxury travel experiences
          </span>
          <h1 className="text-5xl font-serif font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Extraordinary African journeys, crafted exclusively for you.
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-100/90 sm:text-lg">
            Explore secluded islands, private wildlife safaris, and timeless cultural stories with an elevated concierge service that honors your highest expectations.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#tours"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-[#c59d2f]"
            >
              Explore Experiences
              <ArrowRight size={18} className="ml-3" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
            >
              Plan My Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
