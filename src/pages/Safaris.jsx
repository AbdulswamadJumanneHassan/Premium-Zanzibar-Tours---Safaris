import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';

const allSafaris = [
  {
    title: 'Serengeti National Park',
    duration: '3-4 days',
    price: 'Contact for price',
    summary: 'Witness the Great Migration and vast plains of the Serengeti.',
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Ngorongoro Crater',
    duration: '1-2 days',
    price: 'Contact for price',
    summary: 'Explore the world\'s largest inactive volcanic caldera teeming with wildlife.',
    image: 'https://images.unsplash.com/photo-1547471080-7cb2ac012b1a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Tarangire National Park',
    duration: '1-2 days',
    price: 'Contact for price',
    summary: 'Known for its huge elephant herds and ancient baobab trees.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Manyara National Park',
    duration: '1 day',
    price: 'Contact for price',
    summary: 'Famous for its tree-climbing lions and flamingo-covered lake.',
    image: 'https://images.unsplash.com/photo-1600862590209-5a1e2a05d443?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kilimanjaro National Park',
    duration: '6-8 days',
    price: 'Contact for price',
    summary: 'Conquer the highest peak in Africa and explore diverse ecosystems.',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c981?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gombe National Park',
    duration: '2-3 days',
    price: 'Contact for price',
    summary: 'Trek through pristine forests to observe chimpanzees in the wild.',
    image: 'https://images.unsplash.com/photo-1582570377823-39d09c62c2f4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mikumi National Park',
    duration: '1-2 days',
    price: 'Contact for price',
    summary: 'Accessible and abundant wildlife perfect for a quick safari getaway.',
    image: 'https://images.unsplash.com/photo-1551817551-78703a19eb19?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Ruaha National Park',
    duration: '3-4 days',
    price: 'Contact for price',
    summary: 'Tanzania\'s largest national park offering remote and wild safari experiences.',
    image: 'https://images.unsplash.com/photo-1549479901-d14f446059d6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Arusha National Park',
    duration: '1 day',
    price: 'Contact for price',
    summary: 'A multifaceted jewel with a rich variety of landscapes and wildlife.',
    image: 'https://images.unsplash.com/photo-1518182170546-076616fd6738?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Safaris() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Discover Tanzania</p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            Our Safari Packages
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Embark on a journey into the wild. From the endless plains of the Serengeti to the majestic peak of Kilimanjaro, explore our curated safari packages.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
        >
          {allSafaris.map((safari) => (
            <motion.div key={safari.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <TourCard tour={safari} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
