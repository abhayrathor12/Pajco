import { ShieldCheck, Users, Target, BookOpen, CheckCircle, Award, Telescope } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Trust',
    desc: 'We uphold the highest standards of professional ethics and transparency in every engagement.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    desc: 'Every solution is tailored to the unique needs and goals of each client we serve.',
  },
  {
    icon: Target,
    title: 'Precision & Accuracy',
    desc: 'Meticulous attention to detail ensures your compliance and filings are always on point.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'We stay current with evolving regulations to provide you the most relevant advice.',
  },
];

const founderWork = [
  'Corporate compliance under the Companies Act, 2013',
  'Advisory on corporate restructuring and due diligence',
  'Assistance in FEMA and RBI-related compliances',
  'Drafting and vetting of legal and corporate documents',
  'Liaison with regulatory authorities including MCA, ROC, RBI, SEBI, and other authorities',
];

const approachPoints = [
  'Clear and legally sound guidance',
  'Timely execution of statutory compliances',
  'High standards of confidentiality',
  'Solutions aligned with applicable laws and regulatory frameworks',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full" />
          <div className="absolute bottom-5 right-10 w-40 h-40 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Us"
            subtitle="Learn about our firm, our mission, and the values that drive us."
            light
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Your Trusted Partner in Corporate Compliance
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed">
                P.A.J &amp; Co. is an MSME-registered Practicing Company Secretary firm providing
                professional services in the areas of corporate laws, secretarial compliance, and
                regulatory advisory.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                The firm assists startups, entrepreneurs, SMEs, and established organizations in
                meeting their legal and regulatory obligations under applicable laws. With a focus on
                accuracy, timeliness, and professional ethics, we ensure that compliances are managed
                efficiently and in accordance with statutory requirements.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                We support businesses across their lifecycle &mdash; from incorporation and structuring
                to ongoing compliance and advisory &mdash; enabling them to operate with clarity and
                confidence.
              </p>
            </div>
            <div className="relative">
              <img
                src="aboutimage.png"
                alt="Our office"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Guided by Professionalism &amp; Practical Execution
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed">
                At P.A.J &amp; Co., our approach is rooted in delivering clear, actionable, and
                legally sound guidance that empowers our clients to stay compliant with confidence.
              </p>
              <ul className="mt-6 space-y-3">
                {approachPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-navy-700 mt-0.5 shrink-0" />
                    <span className="text-navy-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy-600 leading-relaxed">
                We aim to build long-term professional relationships based on trust, consistency,
                and quality service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'MSME Registered Firm', icon: ShieldCheck },
                { label: 'ICSI Associate Member', icon: Award },
                { label: 'Pan-India Services', icon: Target },
                { label: 'End-to-End Compliance', icon: BookOpen },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center">
                    <Icon size={22} className="text-navy-700" />
                  </div>
                  <span className="text-sm font-medium text-navy-800 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy-900 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                <Target size={22} className="text-navy-700" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-1">Our Mission</p>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">What we stand for</h3>
              <div className="w-10 h-px bg-navy-200 mb-4" />
              <p className="text-navy-600 leading-relaxed text-sm">
                To provide reliable, accurate, and timely professional services in the field of
                corporate laws and compliance, while upholding the highest standards of professional
                ethics and governance.
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy-900 rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                <Telescope size={22} className="text-emerald-700" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-1">Our Vision</p>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Where we're headed</h3>
              <div className="w-10 h-px bg-navy-200 mb-4" />
              <p className="text-navy-600 leading-relaxed text-sm">
                To be recognized as the leading Company Secretaries firm known for integrity,
                innovation, and client satisfaction — where every business, regardless of size,
                has access to world-class compliance and governance support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-navy-700" />
                </div>
                <h4 className="font-heading font-bold text-navy-900 mb-2">{title}</h4>
                <p className="text-sm text-navy-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Founder"
            subtitle="The professional behind P.A.J & Co."
          />
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Founder Image */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative">
                <img
                  src='pr.png'
                  alt="Ms. CS Prerna Jain - Founder"
                  className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <p className="font-heading font-bold text-navy-900 text-sm">Ms. CS Prerna Jain</p>
                  <p className="text-xs text-navy-500 mt-0.5">Founder &amp; Practicing Company Secretary</p>
                  <p className="text-xs text-navy-500">Associate Member, ICSI</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full">
                  ICSI Associate Member
                </span>
                <span className="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full">
                  Certificate of Practice
                </span>
                <span className="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full">
                  Certified POSH Trainer
                </span>
              </div>
            </div>

            {/* Founder Details */}
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Founder &amp; Principal
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight mb-5">
                Ms. CS Prerna Jain
              </h2>
              <p className="text-navy-600 leading-relaxed">
                Ms. Prerna Jain is an Associate Member of the Institute of Company Secretaries of
                India (ICSI) and holds a valid Certificate of Practice. She has experience in the
                areas of corporate laws, secretarial compliance, regulatory advisory, and corporate
                governance, and has been involved in advising clients on various compliance and
                legal matters.
              </p>

              <h4 className="font-heading font-bold text-navy-900 mt-8 mb-4">
                Professional Work Includes:
              </h4>
              <ul className="space-y-3">
                {founderWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-navy-700 mt-0.5 shrink-0" />
                    <span className="text-navy-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="text-navy-600 text-sm leading-relaxed">
                  She is also a <strong className="text-navy-800">Certified POSH Trainer</strong>,
                  providing guidance on workplace compliance and related matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose P.A.J & Co.?"
            subtitle="What sets us apart from the rest."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Qualified & Experienced Team',
              'End-to-End Service Coverage',
              'Timely & Accurate Filings',
              'Personalized Client Attention',
              'Affordable & Transparent Pricing',
              'Pan-India Service Capability',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4"
              >
                <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Work With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
              Let's Work Together
            </h2>
            <p className="mt-5 text-navy-600 leading-relaxed">
              P.A.J &amp; Co. is committed to providing professional and reliable support in
              compliance and advisory matters. For assistance with incorporation, regulatory
              compliance, or corporate advisory services, you may reach out for a professional
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ICSI Disclaimer Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-navy-400 text-center leading-relaxed italic">
            This website is for informational purposes only and does not constitute solicitation
            or advertisement of professional services. Users are requested to seek formal
            professional advice before acting on any information provided herein.
          </p>
        </div>
      </div>
    </>
  );
}