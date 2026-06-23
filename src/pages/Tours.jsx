import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';

const allTours = [
  {
    title: 'Safari Blue',
    duration: 'Full day',
    price: 'Contact for price',
    summary: 'A full day of sailing, snorkeling, and seafood around Menai Bay.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sunset Cruise',
    duration: '2-3 hours',
    price: 'Contact for price',
    summary: 'Sail into the sunset on a traditional dhow with refreshments.',
    image: 'https://images.unsplash.com/photo-1559827055-75704bb8421c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mnemba Island',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Snorkel in crystal clear waters around the famous Mnemba Atoll.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Quad Bike',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Off-road adventure exploring local villages and remote beaches.',
    image: 'https://images.unsplash.com/photo-1596489370603-9eb98db5461c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Spice Tour',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Discover why Zanzibar is known as the Spice Island.',
    image: 'https://images.unsplash.com/photo-1596649807572-1d5420e6f54c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'The Rock Restaurant',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Dine at the iconic restaurant built on a rock in the ocean.',
    image: 'https://images.unsplash.com/photo-1588693959306-b51f0f7f3299?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Nakupenda Island',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Relax on a disappearing sandbank with fresh seafood.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Prison Island',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Visit the giant Aldabra tortoises and learn the island\'s history.',
    image: 'https://images.unsplash.com/photo-1534346859345-5f928e461b65?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Stone Town Tour',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Walk through the historical streets and vibrant markets.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Jozani Forest',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'See the rare red colobus monkeys in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1596649807572-1d5420e6f54c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Baraka Natural Aquarium',
    duration: '2-3 hours',
    price: 'Contact for price',
    summary: 'Swim with rescued sea turtles in a natural lagoon.',
    image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Salaam Cave',
    duration: '2-3 hours',
    price: 'Contact for price',
    summary: 'Explore mystical limestone caves and natural fresh water pools.',
    image: 'https://images.unsplash.com/photo-1518330366185-11504ee46bc0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mtende Village',
    duration: 'Half day',
    price: 'Contact for price',
    summary: 'Experience authentic local village life and beautiful baobab trees.',
    image: 'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Paje Beach',
    duration: 'Full day',
    price: 'Contact for price',
    summary: 'Enjoy kite surfing and pristine white sands on the east coast.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kendewa Beach',
    duration: 'Full day',
    price: 'Contact for price',
    summary: 'Experience stunning sunsets and lively beachfront atmosphere.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Nungwi Beach',
    duration: 'Full day',
    price: 'Contact for price',
    summary: 'Swim in the ocean all day long and visit local dhow builders.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Tours() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Explore Zanzibar</p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            Our Complete Tours & Experiences
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            From pristine beaches to historical stone town walks, browse our comprehensive list of memorable excursions.
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
          {allTours.map((tour, index) => (
            <motion.div key={tour.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
