import { motion } from 'framer-motion';

export default function DestinationCard({ destination }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[32px] bg-slate-900 text-white shadow-glass"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{destination.region}</p>
        <h3 className="mt-2 text-3xl font-serif font-semibold tracking-tight">{destination.name}</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">{destination.description}</p>
      </div>
    </motion.article>
  );
}
