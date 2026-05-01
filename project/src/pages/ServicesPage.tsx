import { useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  Factory,
  FileText,
  Shield,
  Briefcase,
  Calendar,
  RefreshCw,
  LogOut,
  BookOpen,
  Receipt,
  Lightbulb,
  Headphones,
  Rocket,
  Monitor,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceCategories = [
  {
    id: 'start-business',
    icon: Building2,
    title: 'Start Your Business',
    tagline: 'Company Inc., LLP, Proprietorship, Partnership & Section 8 Company',
    color: 'blue',
    items: [
      'Company Registration',
      'Proprietorship Registration',
      'Partnership Registration',
      'Limited Liability Partnership',
      'One Person Company',
      'Private Limited Company',
      'Public Limited Company',
      'Special Entity Registration',
      'Section 8 Company Registration',
      'Society Registration',
      'Trust Registration',
    ],
  },
  {
    id: 'industry-business',
    icon: Factory,
    title: 'Industry & Business Registrations',
    tagline: 'FSSAI, IEC, Startup India, MSME, Shop & Establishment',
    color: 'orange',
    items: [
      'FSSAI Registration',
      'Import Export Code Registration',
      'Startup India Registration',
      'MSME Registration',
      'Shop Establishment Registration',
      'IEC Registration',
    ],
  },
  {
    id: 'tax-statutory',
    icon: Receipt,
    title: 'Tax & Statutory Registration',
    tagline: 'GST, ESI / PF, ITR, DSC, DIN Applications',
    color: 'green',
    items: [
      'GST Registration',
      'ESI / PF Registration',
      'Income Tax Return (ITR)',
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'Tax Compliance',
      'XBRL Filings',
    ],
  },
  {
    id: 'intellectual-property',
    icon: Shield,
    title: 'Intellectual Property & Brand Protection',
    tagline: 'Trademark Reg., Objection, Hearing, Opposition & Counter Statement',
    color: 'purple',
    items: [
      'Trademark Application',
      'Trademark Objection',
      'Trademark Hearing',
      'Trademark Withdrawal',
      'Trademark Registration',
      'Trademark Opposition',
      'Trademark Counter Statement',
      'Trademark Renewal',
      'Trademark Infringement',
      'AMC Service of Monitoring',
    ],
  },
  {
    id: 'corporate-compliance',
    icon: BookOpen,
    title: 'Corporate Compliance & ROC Services',
    tagline: 'ROC Filings, Annual Compliances, KYC, Registers, DPT-3, MSME, XBRL Filings',
    color: 'teal',
    items: [
      'Mandatory Compliances',
      'Annual returns / Annual Filings',
      'MSME Return',
      'Return of Deposit DPT-3 Return',
      'Minutes and Statutory Registers',
      'Appointment of Auditor',
      'Appointment of Secretarial Auditor',
      'KYC of Directors',
      'Yearly/ Event based Directors disclosures',
      'Share Reconciliation Statement',
      'Annual Filing of LLP',
      'Specialised Filings (XBRL)',
      'Share Reconciliation statement',
      'RBI and FEMA Compliances',
    ],
  },
  {
    id: 'event-compliances',
    icon: Calendar,
    title: 'Event-Based Compliances',
    tagline: 'Director Changes, Share Transfer, MOA/AOA Changes, Name Change, Capital Increase & More',
    color: 'amber',
    items: [
      'Alteration of MOA and AOA',
      'Charge Creation / Satisfaction',
      'Company Name Change',
      'LLP Name change',
      'Change in Auditor',
      'Changes in Object clause of MOA',
      'Transfers of Shares',
      'Director Resignation and Appointment',
      'Change in Designation of Director',
      'Increase in Authorised Share Capital',
      'Issue of Shares',
    ],
  },
  {
    id: 'restructuring',
    icon: RefreshCw,
    title: 'Restructuring & Business Changes',
    tagline: 'Conversion (Company & LLP), Office Shift, Winding Up / Strike Off',
    color: 'indigo',
    items: [
      'Registered office Shift of Company and LLP',
      'Conversion of Company in to LLP',
      'Conversion of Public Limited to Private Limited',
      'Conversion of Private Limited to Public Limited',
      'Conversion of LLP in to Company',
      'Conversion of OPC in to private limited',
      'Conversion of Private limited in to OPC',
      'Merger and Acquisition',
      'Winding up',
      'Demerger',
    ],
  },
  {
    id: 'exit-closure',
    icon: LogOut,
    title: 'Exit & Closure Services',
    tagline: 'Company Closure, LLP Closure, GST Cancellation',
    color: 'red',
    items: [
      'Close Your LLP',
      'Close Your Company',
      'GST Cancellation',
      'Strike Off',
    ],
  },
  {
    id: 'professional-advisory',
    icon: Briefcase,
    title: 'Professional & Advisory Services',
    tagline: 'Due Diligence, Secretarial Audit, Accounting, Taxation, Compounding of Offences',
    color: 'slate',
    items: [
      'Due Diligence of Company',
      'Transaction Advisory Services',
      'Secretarial Audit',
      'Social Audit',
      'Social Impact Assessment',
      'Accounting and Bookkeeping',
      'Taxation Service',
      'Income Tax Return (ITR)',
      'Compounding of Offences',
      'GST Compliance',
    ],
  },
  {
    id: 'advisory-support',
    icon: Headphones,
    title: 'Advisory & Support',
    tagline: 'Drafting & Vetting, Retainership Advisory, XBRL Filings',
    color: 'cyan',
    items: [
      'Drafting and Vetting services',
      'Retainership Services',
      'Representation Services',
      'Management Services',
      'Company Law Advisory',
      'Intellectual Property Rights',
      'Capital Market Consultants',
      'Specialised Filings (XBRL)',
    ],
  },
  {
    id: 'startup-support',
    icon: Rocket,
    title: 'Startup Support Services',
    tagline: 'Pvt Ltd Inc., Startup India, Pitch Deck, Startup Compliance, Due Diligence for Investors',
    color: 'rose',
    items: [
      'Pvt Ltd Inc.',
      'Startup India',
      'Pitch Deck',
      'Startup Compliance',
      'Due Diligence for Investors',
    ],
  },
  {
    id: 'digital-director',
    icon: Monitor,
    title: 'Digital & Director Services',
    tagline: 'DSC Application, DIN Application',
    color: 'violet',
    items: [
      'DSC Application',
      'DIN Application',
    ],
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; badge: string; dot: string }> = {
  blue: { bg: 'hover:border-blue-300', iconBg: 'bg-blue-50', iconText: 'text-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  orange: { bg: 'hover:border-orange-300', iconBg: 'bg-orange-50', iconText: 'text-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-500' },
  green: { bg: 'hover:border-green-300', iconBg: 'bg-green-50', iconText: 'text-green-600', badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500' },
  purple: { bg: 'hover:border-purple-300', iconBg: 'bg-purple-50', iconText: 'text-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
  teal: { bg: 'hover:border-teal-300', iconBg: 'bg-teal-50', iconText: 'text-teal-600', badge: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500' },
  amber: { bg: 'hover:border-amber-300', iconBg: 'bg-amber-50', iconText: 'text-amber-600', badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  indigo: { bg: 'hover:border-indigo-300', iconBg: 'bg-indigo-50', iconText: 'text-indigo-600', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' },
  red: { bg: 'hover:border-red-300', iconBg: 'bg-red-50', iconText: 'text-red-600', badge: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' },
  slate: { bg: 'hover:border-slate-300', iconBg: 'bg-slate-50', iconText: 'text-slate-600', badge: 'bg-slate-50 text-slate-700 border-slate-200', dot: 'bg-slate-500' },
  cyan: { bg: 'hover:border-cyan-300', iconBg: 'bg-cyan-50', iconText: 'text-cyan-600', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', dot: 'bg-cyan-500' },
  rose: { bg: 'hover:border-rose-300', iconBg: 'bg-rose-50', iconText: 'text-rose-600', badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
  violet: { bg: 'hover:border-violet-300', iconBg: 'bg-violet-50', iconText: 'text-violet-600', badge: 'bg-violet-50 text-violet-700 border-violet-200', dot: 'bg-violet-500' },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pt-28 pb-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-400/5 rounded-full" />
        <div className="absolute bottom-0 -left-10 w-64 h-64 bg-navy-700/20 rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight">
          Our Services
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
          One Stop Solution for All Your Corporate & Compliance Needs — from
          incorporation to exit and everything in between.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { value: '12', label: 'Service Categories' },
            { value: '100+', label: 'Service Offerings' },
            { value: '100%', label: 'Compliance Coverage' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-navy-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ category }: { category: typeof serviceCategories[0] }) {
  
  const Icon = category.icon;
  const c = colorMap[category.color];

  return (
    <div className="rounded-2xl border bg-white transition-all duration-300 border-navy-200 shadow-xl shadow-navy-900/8">
      {/* Card header */}
      <div className="w-full flex items-start gap-4 p-5 sm:p-6 text-left">
        {/* Icon */}
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${open ? 'bg-navy-900 text-white' : `${c.iconBg} ${c.iconText}`
            }`}
        >
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
              {category.title}
            </h3>
            
          </div>
          <p className="mt-1 text-xs sm:text-sm text-navy-500 leading-relaxed line-clamp-2">
            {category.tagline}
          </p>
          {/* Item count badge */}
          <span
            className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium border ${c.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {category.items.length} Services
          </span>
        </div>
      </div>

      {/* Expandable list */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="border-t border-navy-100 pt-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-navy-600 leading-snug"
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${c.iconText}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Services List Section ────────────────────────────────────────────────────

function ServicesListSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900">
            What We Offer
          </h2>
          
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat) => (
            <ServiceCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 rounded-2xl bg-navy-900 px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-navy-900/20">
          <div className="flex items-center gap-3 text-white text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <div className="font-semibold text-base sm:text-lg">
                One Stop Solution for All Your Corporate & Compliance Needs
              </div>
              <div className="text-navy-400 text-sm mt-0.5">
                Experienced Professionals · 100% Compliance Assured · On-time Delivery · Transparent Pricing
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
          Need a Service Not Listed Here?
        </h2>
        <p className="mt-4 text-navy-300 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          We offer many more specialised services. Reach out and let us know
          how we can help your business thrive.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
         
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors border border-navy-700"
          >
            <ArrowRight className="w-4 h-4" />
            Contact Us
          </a>
        </div>
       
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesListSection />
      <CTASection />
    </div>
  );
}