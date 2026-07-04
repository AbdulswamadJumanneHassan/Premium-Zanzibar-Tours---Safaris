import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TourCard from './TourCard.jsx';
import imgSafariBlue from '../../assets/safari blue.jpg';
import imgSunsetCruise from '../../assets/sunset cruise.jpg';
import imgMnemba from '../../assets/mnemba.jpg';

const tours = [
  {
    title: 'Safari Blue',
    duration: 'Full day',
    price: 'Book Now',
    summary: 'A full day of sailing, snorkeling, and seafood around Menai Bay.',
    image: imgSafariBlue,
  },
  {
    title: 'Sunset Cruise',
    duration: '2-3 hours',
    price: 'Book Now',
    summary: 'Sail into the sunset on a traditional dhow with refreshments.',
    image: imgSunsetCruise,
  },
  {
    title: 'Mnemba Island',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Snorkel in crystal clear waters around the famous Mnemba Atoll.',
    image: imgMnemba,
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

      <div className="mt-12 flex justify-center">
        <Link
          to="/tours"
          className="rounded-full border border-ocean bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ocean transition hover:bg-ocean hover:text-white"
        >
          View All Tours
        </Link>
      </div>
    </section>
  );
}
