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
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-charcoal">{tour.title}</h3>
            <p className="text-sm text-slate-500">{tour.duration}</p>
          </div>
          {tour.price === 'Contact for price' ? (
            <a 
              href="https://wa.me/255773457365" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-ocean hover:bg-slate-200 transition-colors"
            >
              Contact for price
            </a>
          ) : (
            <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-ocean">
              {tour.price}
            </div>
          )}
        </div>

        <p className="text-sm leading-7 text-slate-600">{tour.summary}</p>

        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-500">
            <Star size={14} className="text-gold" />
            Exclusive
          </span>
          <a
            href="#tours"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-ocean transition hover:text-ocean/80"
          >
            View Details
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
