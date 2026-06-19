import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, BedDouble, Clock } from 'lucide-react';

const benefits = [
  {
    title: 'Handpicked Experiences',
    description: 'Each itinerary is crafted with refined local partners and private access to iconic destinations.',
    icon: Sparkles,
  },
  {
    title: 'Private Guides',
    description: 'Expert guides ensure intimate wildlife encounters and cultural moments designed around you.',
    icon: ShieldCheck,
  },
  {
    title: 'Luxury Accommodation',
    description: 'Stay in award-winning lodges, private villas, and beachfront sanctuaries with unmatched service.',
    icon: BedDouble,
  },
  {
    title: '24/7 Concierge',
    description: 'From arrival assistance to bespoke requests, concierge support is available at every step.',
    icon: Clock,
  },
  {
    title: 'Exclusive Access',
    description: 'Enjoy VIP entry, private dining, and experiences not available to the general public.',
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Why choose us</p>
          <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            Elevated service, unrivalled attention, and unforgettable discovery.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            We design journeys for travelers who value authenticity, privacy, and the deepest level of care from first inquiry to final farewell.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(item => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-ocean/10 text-ocean">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
