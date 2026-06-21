import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const Instagram = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Youtube = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const links = [
  'Destinations',
  'Tours',
  'Safaris',
  'Gallery',
  'About',
  'Contact',
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-16 text-charcoal">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        
        {/* Left Section */}
        <div className="max-w-xl space-y-5">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Premium Zanzibar
            </p>

            <h2 className="text-3xl font-serif font-semibold">
              Luxury journeys curated with intention.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-600">
            Discover secluded beaches, private safaris, and timeless cultural
            experiences across East Africa. Our concierge-led approach ensures
            seamless travel from arrival to departure.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-5 text-slate-500">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ocean"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ocean"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ocean"
              aria-label="YouTube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition hover:text-ocean"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Get In Touch
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-ocean flex-shrink-0"
                />
                <span>Stone Town, Zanzibar</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-ocean flex-shrink-0"
                />
                <a
                  href="tel:+255672559426"
                  className="transition hover:text-ocean"
                >
                  Mr. Mwinyi +255 773 457 365
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-ocean flex-shrink-0"
                />
                <a
                  href="mailto:kibtoursandsafaris@gmail.com"
                  className="transition hover:text-ocean break-all"
                >
                 info@premiumzanzibar.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Legal
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#"
                  className="transition hover:text-ocean"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-ocean"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-ocean"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200/70 px-6 py-6 text-sm text-center text-slate-500 sm:px-8">
        <p>© 2026 Premium Zanzibar Tours & Safaris. All rights reserved.</p>
      </div>
    </footer>
  );
}