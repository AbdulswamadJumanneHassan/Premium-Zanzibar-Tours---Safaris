import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard.jsx';
import imgZanzibar from '../../assets/nakupenda.jpg';
import imgSerengeti from '../../assets/serengeti.jfif';
import imgNgorongoro from '../../assets/crater.jpeg';
import imgTarangire from '../../assets/tarangire.jpg';
import imgNyerere from '../../assets/ruaha.jpg';
import imgMnemba from '../../assets/mnemba.jpg';

const destinations = [
  {
    name: 'Zanzibar',
    region: 'Island Sanctuary',
    description: 'White-sand shores, spice-laden culture, and luxurious oceanfront residences.',
    image: imgZanzibar,
  },
  {
    name: 'Serengeti',
    region: 'Wild Horizon',
    description: 'Private plains, extraordinary migrations, and personalized safari living.',
    image: imgSerengeti,
  },
  {
    name: 'Ngorongoro',
    region: 'Crater Majesty',
    description: 'Exclusive crater rim lodges with unrivalled wildlife views and cultural encounters.',
    image: imgNgorongoro,
  },
  {
    name: 'Tarangire',
    region: 'Ancient Baobabs',
    description: 'Private game drives among iconic elephants and gold-lit landscapes.',
    image: imgTarangire,
  },
  {
    name: 'Nyerere National Park',
    region: 'River Wilderness',
    description: 'Luxury river camp retreats with dramatic wildlife riverfront views.',
    image: imgNyerere,
  },
  {
    name: 'Mnemba Island',
    region: 'Private Reef',
    description: 'Secluded villas with snorkeling, private dining, and barefoot island luxury.',
    image: imgMnemba,
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
