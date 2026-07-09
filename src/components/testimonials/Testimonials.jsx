import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: '',
    country: 'United Kingdom',
    rating: 5,
    text: 'Every detail was flawless. From our private safari to the island escape, the team anticipated our every wish.',
    image: '',
  },
  {
    name: '',
    country: 'United States',
    rating: 5,
    text: 'An extraordinary honeymoon crafted with elegance, privacy, and unforgettable moments at every turn.',
    image: '',
  },
  {
    name: '',
    country: 'Spain',
    rating: 5,
    text: 'The impeccable service and bespoke experiences made this trip the most luxurious journey we have ever taken.',
    image: '',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="safaris" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Guest reviews</p>
        <h2 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
          Stories from travelers who experienced the exceptional.
        </h2>
      </div>

      <div className="relative mt-12 mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-12 shadow-glass text-center"
          >
            <div className="flex justify-center mb-6">
              <img className="h-20 w-20 rounded-full object-cover shadow-sm" src={reviews[currentIndex].image} alt={reviews[currentIndex].name} loading="lazy" />
            </div>
            <div className="flex justify-center gap-1 text-gold mb-6">
              {Array.from({ length: reviews[currentIndex].rating }).map((_, index) => (
                <Star key={index} size={20} />
              ))}
            </div>
            <p className="text-lg leading-8 text-slate-600 italic">“{reviews[currentIndex].text}”</p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-charcoal">{reviews[currentIndex].name}</h3>
              <p className="text-sm text-slate-500 mt-1">{reviews[currentIndex].country}</p>
            </div>
          </motion.article>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 rounded-full bg-white p-3 shadow-md text-charcoal hover:text-gold transition hover:scale-110"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 rounded-full bg-white p-3 shadow-md text-charcoal hover:text-gold transition hover:scale-110"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-14 text-center">
        <a
          href="https://www.tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal shadow-sm transition hover:border-gold hover:text-gold"
        >
          Read more on TripAdvisor
        </a>
      </div>
    </section>
  );
}
