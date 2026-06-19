import { motion } from 'framer-motion';
import { CalendarDays, Users, MapPin } from 'lucide-react';

export default function BookingWidget() {
  return (
    <motion.div
      className="glass-backdrop relative overflow-hidden rounded-[32px] border border-white/20 bg-white/90 p-6 shadow-glass backdrop-blur-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Your bespoke itinerary</p>
          <h3 className="text-2xl font-semibold tracking-tight text-charcoal">Reserve an exclusive journey</h3>
        </div>

        <div className="space-y-4 rounded-3xl bg-slate-50 p-4">
          <div className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
            <MapPin className="text-ocean" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Destination</p>
              <p className="text-sm font-semibold">Zanzibar & Beyond</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex flex-1 flex-col gap-2 rounded-3xl bg-white p-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Travel dates</span>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CalendarDays size={18} className="text-gold" />
                <span>12 Jun – 19 Jun</span>
              </div>
            </label>
            <label className="flex flex-1 flex-col gap-2 rounded-3xl bg-white p-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Guests</span>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Users size={18} className="text-ocean" />
                <span>2 guests</span>
              </div>
            </label>
          </div>
        </div>

        <button className="w-full rounded-full bg-ocean px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-ocean/90">
          Search journeys
        </button>
      </div>
    </motion.div>
  );
}
