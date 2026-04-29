import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { servicePreview } from '../data/services';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">PAJ</span>
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
              {socialLinks.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center opacity-50 cursor-not-allowed"
                >
                  <Icon size={16} />
                </span>
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
                { label: 'Home' },
                { label: 'About Us' },
                { label: 'Services' },
                { label: 'Contact' },
              ].map(({ label }) => (
                <li key={label}>
                  <span className="text-sm text-navy-400 cursor-not-allowed select-none opacity-60">
                    {label}
                  </span>
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
                  <span className="text-sm text-navy-400 cursor-not-allowed select-none opacity-60">
                    {title}
                  </span>
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
                <span className="text-sm text-navy-400">
                  Faridabad, Haryana, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-navy-500" />
                <span className="text-sm text-navy-400">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-navy-500" />
                <span className="text-sm text-navy-400">info@pajco.in</span>
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
            <span className="cursor-not-allowed select-none opacity-60">Privacy Policy</span>
            <span className="cursor-not-allowed select-none opacity-60">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}