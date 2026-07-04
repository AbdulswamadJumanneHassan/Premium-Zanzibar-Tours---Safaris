import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';

import imgKendwa from '../assets/kendwa.jpg';
import imgPalm from '../assets/palm.jpg';
import imgNakupenda from '../assets/nakupenda.jpg';
import imgNakupenda1 from '../assets/nakupenda1.jpg';
import imgSunset from '../assets/sunset.jfif';

const zanzibarBeaches = [
  {
    title: 'Kendwa Beach',
    duration: 'North West Coast',
    price: 'Free to visit',
    summary: 'Famous for full moon parties, wide sandy beaches, and calm swimming waters all day.',
    image: imgKendwa,
  },
  {
    title: 'Nungwi Beach',
    duration: 'North Coast',
    price: 'Free to visit',
    summary: 'A bustling beach hub with beautiful sunsets, dhow building, and lively atmosphere.',
    image: imgNakupenda1, // Reusing as proxy
  },
  {
    title: 'Paje Beach',
    duration: 'East Coast',
    price: 'Free to visit',
    summary: 'A kite surfing paradise with incredible white sands and dramatic tidal changes.',
    image: imgPalm,
  },
  {
    title: 'Nakupenda Sandbank',
    duration: 'Offshore',
    price: 'Tour required',
    summary: 'A breathtaking disappearing sandbank surrounded by crystal clear turquoise waters.',
    image: imgNakupenda,
  },
  {
    title: 'Matemwe Beach',
    duration: 'North East Coast',
    price: 'Free to visit',
    summary: 'A quiet, secluded beach perfect for relaxation and close to Mnemba Atoll for diving.',
    image: imgSunset,
  }
];

export default function Beaches() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Coastal Beauty</p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            Zanzibar Beaches
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Discover the world-renowned pristine white sands and crystal-clear turquoise waters of Zanzibar's breathtaking coastline.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
        >
          {zanzibarBeaches.map((beach) => (
            <motion.div key={beach.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <TourCard tour={beach} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
