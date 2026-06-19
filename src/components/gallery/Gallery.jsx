import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1533688600048-74f1e37f81c6?auto=format&fit=crop&w=900&q=80',
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
