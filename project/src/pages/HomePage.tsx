import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, Users, ShieldCheck, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicePreview } from '../data/services';
import prernaimage from '../../public/prerna.jpeg'
const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: ShieldCheck, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '100%', label: 'Compliance Rate' },
  { icon: CalendarCheck, value: '24hr', label: 'Response Time' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSlider />



      {/* Welcome Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text Content */}
            <div className="flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 w-fit">
                Welcome
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Welcome to P.A.J & Co. &ndash;<br />Company Secretaries
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed text-sm sm:text-base">
                P.A.J & Co. is an MSME-registered Practicing Company Secretary firm providing
                professional services in the areas of corporate laws, secretarial compliance,
                and regulatory advisory.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed text-sm sm:text-base">
                The firm assists startups, entrepreneurs, SMEs, and established organizations
                in meeting their legal and regulatory obligations under applicable laws. With a
                focus on accuracy, timeliness, and professional ethics, we ensure that
                compliances are managed efficiently and in accordance with statutory requirements.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed text-sm sm:text-base">
                We support businesses across their lifecycle &mdash; from incorporation and
                structuring to ongoing compliance and advisory &mdash; enabling them to operate
                with clarity and confidence.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors shadow-md w-fit"
              >
                Read more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: Image with overlapping badge */}
            <div className="relative">
              <img
                src={prernaimage}
                alt="Professional"
                className="rounded-2xl shadow-lg w-full object-cover object-top max-h-[480px]"
              />
              {/* Badge — half on image, half outside, bottom-left */}
              <div className="absolute bottom-6 -left-10 bg-navy-900 text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">

                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-5 h-5 text-white"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="8" r="2.5" />
                    <path d="M8.5 16c1.2-1.5 2.4-2 3.5-2s2.3.5 3.5 2" />
                    <path d="M11 11.5l1 1 1-1" />
                    <path d="M12 12.5v2.5" />
                  </svg>

                </div>

                <div>
                  <p className="text-xs font-bold leading-tight">
                    Professionally<br />Managed Firm
                  </p>

                  <p className="text-[10px] text-navy-300 mt-0.5 leading-tight">
                    Corporate Compliance<br />& Advisory
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Features Strip */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

              {/* 1 - Confidential */}
              <div className="flex flex-col gap-3 px-6 py-4 lg:py-0">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-base">Confidential</p>
                  <p className="text-xs font-semibold text-amber-500 mt-0.5">Data Protection Standards</p>
                  <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  We maintain strict confidentiality protocols to safeguard client information
                  and ensure complete data security at all stages.
                </p>
              </div>

              {/* 2 - End-to-End */}
              <div className="flex flex-col gap-3 px-6 py-4 lg:py-0">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <Award size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-base">End-to-End</p>
                  <p className="text-xs font-semibold text-amber-500 mt-0.5">Compliance & Advisory</p>
                  <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  From incorporation to ongoing regulatory requirements, we provide comprehensive
                  support across the entire compliance lifecycle.
                </p>
              </div>

              {/* 3 - Business-Focused */}
              <div className="flex flex-col gap-3 px-6 py-4 lg:py-0">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <Users size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-base">Business-Focused</p>
                  <p className="text-xs font-semibold text-amber-500 mt-0.5">Startup & SME Support</p>
                  <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Tailored solutions designed to meet the practical needs of startups,
                  entrepreneurs, and growing businesses.
                </p>
              </div>

              {/* 4 - Responsive */}
              <div className="flex flex-col gap-3 px-6 py-4 lg:py-0">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <CalendarCheck size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-base">Responsive</p>
                  <p className="text-xs font-semibold text-amber-500 mt-0.5">Timely Assistance</p>
                  <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Prompt communication and proactive support to help you stay ahead of
                  deadlines and regulatory changes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive corporate solutions tailored to your business needs."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-10">
            {servicePreview.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle icon - fixed height wrapper */}
                  <div className="h-24 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                      <Icon size={32} className="text-navy-900 group-hover:text-amber-500 transition-colors" />
                    </div>
                  </div>
                  {/* Gold underline */}
                  <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-3" />
                  {/* Title */}
                  <p className="font-bold text-navy-900 text-sm sm:text-base leading-tight mb-2 min-h-[40px] flex items-start justify-center">
                    {service.title}
                  </p>
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-navy-500 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-400 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            Whether you are starting a new business or need help with compliance,
            our team is here to guide you every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/consultation"
              className="px-8 py-3.5 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors shadow-lg"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
