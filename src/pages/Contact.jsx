import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="overflow-hidden bg-gray-50 pt-32 pb-24">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl font-bold text-charcoal sm:text-6xl">
            Get in <span className="text-ocean">Touch</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
            Whether you are ready to book your dream Zanzibar safari or simply have a few questions, our team of local experts is here to help you craft the perfect itinerary.
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="rounded-3xl bg-white p-8 shadow-glass border border-gray-100">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-charcoal">Contact Information</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Our Office</h3>
                    <p className="mt-1 text-gray-600">123 Kenyatta Road, Stone Town<br />Zanzibar City, Tanzania</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <p className="mt-1 text-gray-600">+255 773 457 365</p>
                    <p className="text-gray-600">+255 773 457 365 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <p className="mt-1 text-gray-600">info@premiumzanzibar.com</p>
                    <p className="text-gray-600">bookings@premiumzanzibar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Business Hours</h3>
                    <p className="mt-1 text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl shadow-glass border border-gray-100 h-[350px]">
              <iframe
                title="Zanzibar Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.0371420556!2d39.18683535!3d-6.165917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd09eb050efb3%3A0x6739bc4123dc10b3!2sZanzibar%20City%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1718912345678!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-glass border border-gray-100 sm:p-10">
              <h2 className="mb-8 font-serif text-3xl font-semibold text-charcoal">Send Us a Message</h2>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-charcoal">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-charcoal">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-charcoal">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-charcoal">Subject</label>
                  <select
                    id="subject"
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
                  >
                    <option>General Inquiry</option>
                    <option>Book a Safari</option>
                    <option>Custom Tour Package</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-charcoal">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
                    placeholder="Tell us about your dream trip..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-8 py-4 font-semibold text-white transition hover:bg-ocean/90 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
