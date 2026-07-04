import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TourCard from '../tours/TourCard.jsx';
import imgSerengeti from '../../assets/serengeti.jfif';
import imgCrater from '../../assets/crater.jpeg';
import imgTarangire from '../../assets/tarangire.jpg';

const safaris = [
  {
    title: 'Serengeti National Park',
    duration: '3-4 days',
    price: 'Book Now',
    summary: 'Witness the Great Migration and vast plains of the Serengeti.',
    image: imgSerengeti,
  },
  {
    title: 'Ngorongoro Crater',
    duration: '1-2 days',
    price: 'Book Now',
    summary: 'Explore the world\'s largest inactive volcanic caldera teeming with wildlife.',
    image: imgCrater,
  },
  {
    title: 'Tarangire National Park',
    duration: '1-2 days',
    price: 'Book Now',
    summary: 'Known for its huge elephant herds and ancient baobab trees.',
    image: imgTarangire,
  },
];

export default function FeaturedSafaris() {
  return (
    <section id="safaris" className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 bg-slate-50">
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Wild Encounters</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          Unforgettable Safari Adventures.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:mx-0">
          Experience the thrill of the African bush with our handpicked safari packages to Tanzania's most iconic national parks.
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
        {safaris.map((safari) => (
          <motion.div key={safari.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <TourCard tour={safari} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/safaris"
          className="rounded-full border border-ocean bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ocean transition hover:bg-ocean hover:text-white"
        >
          View All Safaris
        </Link>
      </div>
    </section>
  );
}
