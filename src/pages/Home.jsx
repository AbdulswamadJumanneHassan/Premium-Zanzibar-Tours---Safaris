import { AnimatePresence, motion } from 'framer-motion';
import Hero from '../components/hero/Hero.jsx';
import FeaturedTours from '../components/tours/FeaturedTours.jsx';
import FeaturedSafaris from '../components/safaris/FeaturedSafaris.jsx';
import WhyChooseUs from '../components/about/WhyChooseUs.jsx';
import Destinations from '../components/destinations/Destinations.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import Gallery from '../components/gallery/Gallery.jsx';
import Newsletter from '../components/newsletter/Newsletter.jsx';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Hero />
        </motion.section>
      </AnimatePresence>

      <section className="relative z-10 -mt-24 sm:-mt-28">
        <FeaturedTours />
        <FeaturedSafaris />
        <WhyChooseUs />
        <Destinations />
        <Testimonials />
        <Gallery />
        <Newsletter />
      </section>
    </main>
  );
}
