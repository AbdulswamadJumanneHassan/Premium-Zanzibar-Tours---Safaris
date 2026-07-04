import { motion } from 'framer-motion';
import WhyChooseUs from '../components/about/WhyChooseUs.jsx';

export default function About() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 sm:px-8">
        <div className="mb-16 flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-charcoal sm:text-5xl">
            About Premium Zanzibar
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Learn more about our dedication to providing exceptional, authentic, and luxurious experiences across Zanzibar and mainland Tanzania.
          </p>
        </div>
        
        <WhyChooseUs />
      </section>
    </main>
  );
}
