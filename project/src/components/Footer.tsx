import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { servicePreview } from '../data/services';
const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/pajandco/'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/pajandco.pcsfirm/'
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src="/pajcow.png"
                  alt="PAJ Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">P.A.J & Co.</span>
                <span className="block text-[10px] tracking-widest uppercase -mt-1 text-navy-400">
                  Company Secretaries
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-400 leading-relaxed">
              Providing comprehensive company secretarial, compliance, and advisory services
              to businesses across India.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicePreview.slice(0, 6).map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={`/services#${id}`}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-navy-500" />
                <span className="text-sm text-navy-400 leading-relaxed">
                  Gali no. 7, Block-O<br />
                  O.U.GF-1, Jain Villa<br />
                  Mukesh Colony, Faridabad<br />
                  Haryana, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-navy-500" />
                <span className="text-sm text-navy-400">+91-9625915947</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-navy-500" />
                <span className="text-sm text-navy-400">pcsprernajain@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} P.A.J & Co. &ndash; Company Secretaries. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-navy-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}