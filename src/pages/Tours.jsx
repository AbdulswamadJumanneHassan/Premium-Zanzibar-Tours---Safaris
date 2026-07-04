import { motion } from 'framer-motion';
import TourCard from '../components/tours/TourCard.jsx';
import imgSafariBlue from '../assets/safari blue.jpg';
import imgSunsetCruise from '../assets/sunset cruise.jpg';
import imgMnemba from '../assets/mnemba.jpg';
import imgQuadBike from '../assets/quad bike.png';
import imgSpiceTour from '../assets/spice tour.jfif';
import imgTheRock from '../assets/the rock.jpg';
import imgNakupenda from '../assets/nakupenda.jpg';
import imgPrison from '../assets/prison.jpg';
import imgStoneTown from '../assets/stone town.jpg';
import imgJozani from '../assets/jozani forest.jpg';
import imgAquarium from '../assets/aquarium.jpg';
import imgSalaam from '../assets/salaam.jpg';
import imgAdventure from '../assets/Adventure.jpeg';
import imgPalm from '../assets/palm.jpg';
import imgKendwa from '../assets/kendwa.jpg';
import imgNakupenda1 from '../assets/nakupenda1.jpg';

const allTours = [
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
  {
    title: 'Quad Bike',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Off-road adventure exploring local villages and remote beaches.',
    image: imgQuadBike,
  },
  {
    title: 'Spice Tour',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Discover why Zanzibar is known as the Spice Island.',
    image: imgSpiceTour,
  },
  {
    title: 'The Rock Restaurant',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Dine at the iconic restaurant built on a rock in the ocean.',
    image: imgTheRock,
  },
  {
    title: 'Nakupenda Island',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Relax on a disappearing sandbank with fresh seafood.',
    image: imgNakupenda,
  },
  {
    title: 'Prison Island',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Visit the giant Aldabra tortoises and learn the island\'s history.',
    image: imgPrison,
  },
  {
    title: 'Stone Town Tour',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Walk through the historical streets and vibrant markets.',
    image: imgStoneTown,
  },
  {
    title: 'Jozani Forest',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'See the rare red colobus monkeys in their natural habitat.',
    image: imgJozani,
  },
  {
    title: 'Baraka Natural Aquarium',
    duration: '2-3 hours',
    price: 'Book Now',
    summary: 'Swim with rescued sea turtles in a natural lagoon.',
    image: imgAquarium,
  },
  {
    title: 'Salaam Cave',
    duration: '2-3 hours',
    price: 'Book Now',
    summary: 'Explore mystical limestone caves and natural fresh water pools.',
    image: imgSalaam,
  },
  {
    title: 'Mtende Village',
    duration: 'Half day',
    price: 'Book Now',
    summary: 'Experience authentic local village life and beautiful baobab trees.',
    image: imgAdventure,
  },
  {
    title: 'Paje Beach',
    duration: 'Full day',
    price: 'Book Now',
    summary: 'Enjoy kite surfing and pristine white sands on the east coast.',
    image: imgPalm,
  },
  {
    title: 'Kendwa Beach',
    duration: 'Full day',
    price: 'Book Now',
    summary: 'Experience stunning sunsets and lively beachfront atmosphere.',
    image: imgKendwa,
  },
  {
    title: 'Nungwi Beach',
    duration: 'Full day',
    price: 'Book Now',
    summary: 'Swim in the ocean all day long and visit local dhow builders.',
    image: imgNakupenda1,
  },
];

export default function Tours() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] min-h-[400px] w-full items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={imgSafariBlue} alt="Zanzibar Tours" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 flex flex-col gap-4 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold drop-shadow-md">Explore Zanzibar</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl">
            Our Complete Tours & Experiences
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90 drop-shadow-md">
            From pristine beaches to historical stone town walks, browse our comprehensive list of memorable excursions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
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
