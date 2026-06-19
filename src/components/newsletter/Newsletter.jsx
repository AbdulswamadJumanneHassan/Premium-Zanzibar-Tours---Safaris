import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 sm:px-8">
      <div className="rounded-[40px] border border-slate-200/80 bg-gradient-to-r from-white via-slate-50 to-white p-10 shadow-glass">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Travel inspiration</p>
            <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
              Receive exclusive travel inspiration.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Join our concierge list for early access to bespoke itineraries, curated private stays, and seasonal journey highlights.
            </p>
          </div>

          <motion.form
            className="space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Email address</label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm text-charcoal outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/10"
                aria-label="Email address"
              />
              <button className="rounded-full bg-ocean px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-ocean/90">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-500">No spam. Only luxury travel insights and invitation-only offers.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
