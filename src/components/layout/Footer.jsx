import { Globe, Heart, Share2, MapPin, Mail, Phone } from 'lucide-react';

const links = ['Destinations', 'Tours', 'Safaris', 'Gallery', 'About', 'Contact'];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-16 text-charcoal">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-5">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Premium Zanzibar</p>
            <h2 className="text-3xl font-serif font-semibold">Luxury journeys curated with intention.</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-600">
            Discover secluded beaches, private safaris, and timeless cultural experiences across East Africa.
            Our concierge-led approach ensures seamless travel from arrival to departure.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <a href="#" className="transition hover:text-ocean"><Share2 size={20} /></a>
            <a href="#" className="transition hover:text-ocean"><Heart size={20} /></a>
            <a href="#" className="transition hover:text-ocean"><Globe size={20} /></a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {links.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition hover:text-ocean">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-ocean" />
                <span>Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-ocean" />
                <a href="mailto:hello@premiumzanzibar.com" className="transition hover:text-ocean">hello@premiumzanzibar.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-ocean" />
                <a href="tel:+255123456789" className="transition hover:text-ocean">+255 123 456 789</a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="transition hover:text-ocean">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-ocean">Terms & Conditions</a></li>
              <li><a href="#" className="transition hover:text-ocean">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200/70 px-6 py-6 text-sm text-slate-500 sm:px-8">
        <p>© 2026 Premium Zanzibar Tours & Safaris. All rights reserved.</p>
      </div>
    </footer>
  );
}
