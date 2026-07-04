import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';

import imgParkHyatt from '../assets/Park Hyatt.jpg';
import imgSerena from '../assets/serena.jpg';
import imgTembo from '../assets/tembo.jpg';
import imgDhowPalace from '../assets/dhow palace.jpg';
import imgAfricaHouse from '../assets/africa house.jpg';
import imgMaruMaru from '../assets/maru maru.jfif';

import imgAmaan from '../assets/amaan.jpg';
import imgAzanzi from '../assets/azanzi.webp';
import imgBaraza from '../assets/baraza.jpg';
import imgBrees from '../assets/brees.jpg';
import imgDoubleTree from '../assets/double tree.jpg';
import imgGold from '../assets/gold.jpg';
import imgResidence from '../assets/residence.jpg';

const townHotels = [
  {
    title: 'Park Hyatt Zanzibar',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'Luxury hotel located on the beachfront in the heart of Stone Town.',
    image: imgParkHyatt,
  },
  {
    title: 'Zanzibar Serena Hotel',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'Historic waterfront hotel with magnificent views of the Indian Ocean.',
    image: imgSerena,
  },
  {
    title: 'Tembo House Hotel',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'Iconic heritage hotel blending Swahili and Arabian architecture.',
    image: imgTembo,
  },
  {
    title: 'Dhow Palace Hotel',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'A restored 19th-century building offering an authentic Stone Town experience.',
    image: imgDhowPalace,
  },
  {
    title: 'Africa House Hotel',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'Famous for its sunset lounge and rich historical background.',
    image: imgAfricaHouse,
  },
  {
    title: 'Maru Maru Hotel',
    duration: 'Town Hotel',
    price: 'Book Now',
    summary: 'Modern comfort mixed with classic Zanzibari charm and a rooftop pool.',
    image: imgMaruMaru,
  },
];

const beachHotels = [
  {
    title: 'Amaan Beach Bungalows',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'Relaxed beachfront bungalows situated in the lively Nungwi area.',
    image: imgAmaan,
  },
  {
    title: 'Azanzi Beach Hotel',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'A beautiful boutique hotel located on the north eastern coast.',
    image: imgAzanzi,
  },
  {
    title: 'Baraza Resort & Spa',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'An exclusive, luxurious all-inclusive resort along Bwejuu beach.',
    image: imgBaraza,
  },
  {
    title: 'Breezes Beach Club',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'An elegant and romantic retreat set along a pristine white sandy beach.',
    image: imgBrees,
  },
  {
    title: 'DoubleTree Resort',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'Enjoy stunning ocean views and warm hospitality in Nungwi.',
    image: imgDoubleTree,
  },
  {
    title: 'Gold Zanzibar',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'A luxurious beach house resort offering an oasis of calm and beauty.',
    image: imgGold,
  },
  {
    title: 'The Residence Zanzibar',
    duration: 'Beach Hotel',
    price: 'Book Now',
    summary: 'A luxury villa resort nestled on a lush, forested estate on the southwest coast.',
    image: imgResidence,
  },
];

export default function Hotels() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 sm:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Where to Stay</p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            Zanzibar Hotels
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            From the historic alleys of Stone Town to the pristine shores of the coastline, discover the perfect accommodation for your Zanzibar getaway.
          </p>
        </div>
      </section>

      {/* Town Hotels Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-semibold text-charcoal">Town Hotels</h2>
            <p className="mt-4 text-sm text-slate-600">Experience the rich history and culture of Stone Town.</p>
          </div>
          
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
          >
            {townHotels.map((hotel) => (
              <motion.div key={hotel.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
                <TourCard tour={hotel} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beach Hotels Section */}
      <section className="py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-semibold text-charcoal">Beach Hotels</h2>
            <p className="mt-4 text-sm text-slate-600">Relax in paradise along Zanzibar's stunning white sand beaches.</p>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
          >
            {beachHotels.map((hotel) => (
              <motion.div key={hotel.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
                <TourCard tour={hotel} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
