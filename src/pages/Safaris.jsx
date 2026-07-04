import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';
import imgSerengeti from '../assets/serengeti.jfif';
import imgCrater from '../assets/crater.jpeg';
import imgTarangire from '../assets/tarangire.jpg';
import imgManyara from '../assets/manyara.jpg';
import imgKilimanjaro from '../assets/kilimanjaro.jpg';
import imgGombe from '../assets/gombe.jpg';
import imgMikumi from '../assets/mikumi.jpg';
import imgRuaha from '../assets/ruaha.jpg';
import imgArusha from '../assets/arusha.jpg';

const allSafaris = [
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
  {
    title: 'Manyara National Park',
    duration: '1 day',
    price: 'Book Now',
    summary: 'Famous for its tree-climbing lions and flamingo-covered lake.',
    image: imgManyara,
  },
  {
    title: 'Kilimanjaro National Park',
    duration: '6-8 days',
    price: 'Book Now',
    summary: 'Conquer the highest peak in Africa and explore diverse ecosystems.',
    image: imgKilimanjaro,
  },
  {
    title: 'Gombe National Park',
    duration: '2-3 days',
    price: 'Book Now',
    summary: 'Trek through pristine forests to observe chimpanzees in the wild.',
    image: imgGombe,
  },
  {
    title: 'Mikumi National Park',
    duration: '1-2 days',
    price: 'Book Now',
    summary: 'Accessible and abundant wildlife perfect for a quick safari getaway.',
    image: imgMikumi,
  },
  {
    title: 'Ruaha National Park',
    duration: '3-4 days',
    price: 'Book Now',
    summary: 'Tanzania\'s largest national park offering remote and wild safari experiences.',
    image: imgRuaha,
  },
  {
    title: 'Arusha National Park',
    duration: '1 day',
    price: 'Book Now',
    summary: 'A multifaceted jewel with a rich variety of landscapes and wildlife.',
    image: imgArusha,
  },
];

export default function Safaris() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] min-h-[400px] w-full items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={imgSerengeti} alt="Tanzania Safaris" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 flex flex-col gap-4 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold drop-shadow-md">Discover Tanzania</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl">
            Our Safari Packages
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90 drop-shadow-md">
            Embark on a journey into the wild. From the endless plains of the Serengeti to the majestic peak of Kilimanjaro, explore our curated safari packages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">

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
