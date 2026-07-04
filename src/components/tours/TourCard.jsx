import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function TourCard({ tour }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-glass transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_80px_rgba(10,77,104,0.12)]"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gold/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-charcoal shadow-sm">
          Luxury
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-charcoal">{tour.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{tour.duration}</p>
        </div>

        <p className="text-sm leading-7 text-slate-600">{tour.summary}</p>

        <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between items-center">
          {tour.price === 'Book Now' ? (
            <a 
              href="https://wa.me/255773457365" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-ocean/90 hover:shadow-md"
            >
              Book Now
            </a>
          ) : (
            <div className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-ocean">
              {tour.price}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
