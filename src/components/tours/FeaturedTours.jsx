import { motion } from 'framer-motion';
import TourCard from './TourCard.jsx';

const tours = [
  {
    title: 'Private Serengeti Flying Safari',
    duration: '7 days • tailored itinerary',
    price: '$12,500 / person',
    summary: 'A luxurious air safari across the Serengeti with private game drives and intimate lodge stays.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury Ngorongoro Escape',
    duration: '5 days • exclusive lodging',
    price: '$9,800 / person',
    summary: 'Discover dramatic calderas, private conservation areas, and elevated safari experiences.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mnemba Island Private Retreat',
    duration: '6 days • beachfront villa',
    price: '$11,200 / person',
    summary: 'Discrete island living with private diving, spa rituals, and turquoise ocean seclusion.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function FeaturedTours() {
  return (
    <section id="tours" className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8">
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Signature Journeys</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          Luxury tours designed for discerning travelers.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:mx-0">
          Crafted for those seeking private wildlife encounters, island escapes, and seamless cultural immersion.
        </p>
      </div>

      <motion.div
        className="mt-12 grid gap-8 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
        }}
      >
        {tours.map((tour, index) => (
          <motion.div key={tour.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <TourCard tour={tour} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
