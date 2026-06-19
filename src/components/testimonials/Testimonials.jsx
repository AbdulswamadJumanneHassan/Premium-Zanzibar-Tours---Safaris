import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amelia King',
    country: 'United Kingdom',
    rating: 5,
    text: 'Every detail was flawless. From our private safari to the island escape, the team anticipated our every wish.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Noah Chen',
    country: 'United States',
    rating: 5,
    text: 'An extraordinary honeymoon crafted with elegance, privacy, and unforgettable moments at every turn.',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sophia Martinez',
    country: 'Spain',
    rating: 5,
    text: 'The impeccable service and bespoke experiences made this trip the most luxurious journey we have ever taken.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="safaris" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Guest reviews</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          Stories from travelers who experienced the exceptional.
        </h2>
      </div>

      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {reviews.map(review => (
          <motion.article
            key={review.name}
            className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-glass"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="flex items-center gap-4">
              <img className="h-16 w-16 rounded-full object-cover" src={review.image} alt={review.name} loading="lazy" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal">{review.name}</h3>
                <p className="text-sm text-slate-500">{review.country}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-1 text-gold">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} size={18} />
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">“{review.text}”</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
