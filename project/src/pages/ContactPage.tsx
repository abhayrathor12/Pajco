import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, ExternalLink, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Gali no. 7, Block-O, O.U.GF-1, Jain Villa, Mukesh Colony',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9625915947',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'pcsprernajain@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 10:00 AM - 7:00 PM',
  },
];

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

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-56 h-56 bg-white rounded-full" />
          <div className="absolute bottom-0 left-10 w-36 h-36 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with our team for consultations, queries, or service requests."
            light
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-navy-700" />
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 uppercase tracking-wider font-medium">
                          {label}
                        </p>
                        <p className="text-sm text-navy-800 mt-0.5">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-navy-400 uppercase tracking-wider font-medium mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center hover:bg-navy-100 transition-colors"
                      >
                        <Icon size={18} className="text-navy-700" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule Meeting */}
              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Schedule a Meeting
                </h3>
                <p className="text-sm text-navy-300 mb-5">
                  Prefer a face-to-face discussion? Book a time slot with our team.
                </p>
                <a
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors shadow-md"
                >
                  <ExternalLink size={16} />
                  Book a Slot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* Google Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112319.01643749018!2d77.2448093!3d28.3899963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbbd38bf4d7d%3A0xb93ed3903a3654fe!2sJain%20villas!5e0!3m2!1sen!2sin!4v1777537157925!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
