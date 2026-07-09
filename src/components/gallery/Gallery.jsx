import { motion } from 'framer-motion';
import imgG1 from '../../assets/safari blue.jpg';
import imgG2 from '../../assets/cultural.jpeg';
import imgG3 from '../../assets/mnemba.jpg';
import imgG4 from '../../assets/spice tour.jpeg';
import imgG5 from '../../assets/stone town.jpg';
import imgG6 from '../../assets/sunset cruise.jpg';

const images = [
  imgG1,
  imgG2,
  imgG3,
  imgG4,
  imgG5,
  imgG6,
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          A visual story of island elegance and safari refinement.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((src, index) => (
          <motion.div
            key={src}
            className="overflow-hidden rounded-[32px] bg-slate-100 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} className="h-[360px] w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
