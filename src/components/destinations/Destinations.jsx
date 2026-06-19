import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard.jsx';

const destinations = [
  {
    name: 'Zanzibar',
    region: 'Island Sanctuary',
    description: 'White-sand shores, spice-laden culture, and luxurious oceanfront residences.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Serengeti',
    region: 'Wild Horizon',
    description: 'Private plains, extraordinary migrations, and personalized safari living.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ngorongoro',
    region: 'Crater Majesty',
    description: 'Exclusive crater rim lodges with unrivalled wildlife views and cultural encounters.',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Tarangire',
    region: 'Ancient Baobabs',
    description: 'Private game drives among iconic elephants and gold-lit landscapes.',
    image: 'https://images.unsplash.com/photo-1533688600048-74f1e37f81c6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Nyerere National Park',
    region: 'River Wilderness',
    description: 'Luxury river camp retreats with dramatic wildlife riverfront views.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Mnemba Island',
    region: 'Private Reef',
    description: 'Secluded villas with snorkeling, private dining, and barefoot island luxury.',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Destinations</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          Discover iconic landscapes and private islands.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
          Our destinations bring together extraordinary wildlife, coastal serenity, and cultural richness for unforgettable travel stories.
        </p>
      </div>

      <motion.div
        className="mt-10 grid gap-8 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {destinations.map(destination => (
          <motion.div key={destination.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <DestinationCard destination={destination} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
