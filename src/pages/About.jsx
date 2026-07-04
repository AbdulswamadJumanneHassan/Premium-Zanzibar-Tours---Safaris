import { motion } from 'framer-motion';
import WhyChooseUs from '../components/about/WhyChooseUs.jsx';

import imgAbout from '../assets/about.jpg';

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] min-h-[400px] w-full items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={imgAbout} alt="About Premium Zanzibar" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 flex flex-col gap-4 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold drop-shadow-md">Our Story</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl">
            About Premium Zanzibar
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90 drop-shadow-md">
            Learn more about our dedication to providing exceptional, authentic, and luxurious experiences across Zanzibar and mainland Tanzania.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        
        <WhyChooseUs />
      </section>
    </main>
  );
}
