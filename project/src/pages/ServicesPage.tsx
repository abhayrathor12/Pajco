import { useNavigate } from 'react-router-dom';
import {
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
  Rocket,
  Monitor,
  Users,
  ShieldCheck,
  Clock,
  IndianRupee,
  Headphones,
  Scale,
  ArrowRight,
  Target,
  Award,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceItem = { label: string; slug?: string };
type SubSection = { heading: string; items: ServiceItem[] };
type CategoryCol = {
  num: string;
  icon: React.ElementType;
  title: string;
  color: string;
  sections: SubSection[];
};
type BottomCol = {
  icon: React.ElementType;
  title: string;
  items: string[];
};

// ─── Top 8 category columns ───────────────────────────────────────────────────

const categoryCols: CategoryCol[] = [
  {
    num: '01',
    icon: Building2,
    title: 'Business Setup & Incorporation',
    color: 'navy',
    sections: [
      {
        heading: 'Company Formation',
        items: [
          { label: 'Private Limited Company', slug: 'private-limited-company' },
          { label: 'Public Limited Company', slug: 'public-limited-company' },
          { label: 'One Person Company (OPC)', slug: 'one-person-company' },
          { label: 'LLP Registration', slug: 'llp-registration' },
          { label: 'Partnership Firm Registration', slug: 'partnership-firm-registration' },
          { label: 'Proprietorship Setup', slug: 'proprietorship-setup' },
          { label: 'Section 8 Company (NGO)', slug: 'section-8-company' },
        ],
      },
      {
        heading: 'Industry & Business Registrations',
        items: [
          { label: 'FSSAI Registration', slug: 'fssai-registration' },
          { label: 'Import Export Code (IEC)', slug: 'iec-registration' },
          { label: 'ICEGATE / DGFT Registration', slug: 'icegate-dgft-registration' },
          { label: 'Startup India Registration', slug: 'startup-india-registration' },
          { label: 'MSME (Udyam) Registration', slug: 'msme-udyam-registration' },
          { label: 'Shop & Establishment', slug: 'shop-establishment-registration' },
        ],
      },
    ],
  },
  {
    num: '02',
    icon: BookOpen,
    title: 'Corporate Secretarial & ROC Compliance',
    color: 'navy',
    sections: [
      {
        heading: 'Event-Based Compliance',
        items: [
          { label: 'Appointment / Resignation of Directors', slug: 'director-appointment-resignation' },
          { label: 'Change of Auditor', slug: 'change-of-auditor' },
          { label: 'Share Transfer & Allotment', slug: 'share-transfer-allotment' },
          { label: 'Increase in Authorised Capital', slug: 'increase-authorised-capital' },
          { label: 'Alteration of MOA & AOA', slug: 'moa-aoa-alteration' },
          { label: 'Change of Company Name', slug: 'company-name-change' },
          { label: 'Change of Registered Office', slug: 'change-of-registered-office' },
        ],
      },
      {
        heading: 'Ongoing Secretarial Support',
        items: [
          { label: 'Board Meeting Notices & Minutes', slug: 'board-meeting-notices-minutes' },
          { label: 'Maintenance of Statutory Registers', slug: 'statutory-registers-maintenance' },
          { label: 'Director KYC & Disqualification', slug: 'director-kyc-disqualification' },
          { label: 'ROC Event-Based Filings', slug: 'roc-event-based-filings' },
          { label: 'Secretarial Audit', slug: 'secretarial-audit' },
        ],
      },
      {
        heading: 'Annual Compliance',
        items: [
          { label: 'AOC-4 Filing', slug: 'aoc-4-filing' },
          { label: 'MGT-7 / MGT-7A Filing', slug: 'mgt-7-annual-return' },
          { label: 'ADT-1 & MSME Annual Filing', slug: 'adt-1-msme-annual-filing' },
          { label: 'Annual ROC Filing Support', slug: 'roc-event-based-filings' },
          { label: 'Compounding of Offences', slug: 'compounding-of-offences' },
        ],
      },
    ],
  },
  {
    num: '03',
    icon: Receipt,
    title: 'GST Services',
    color: 'navy',
    sections: [
      {
        heading: '',
        items: [
          { label: 'GST Registration & Setup', slug: 'gst-registration' },
          { label: 'GSTR-1 / GSTR-3B Return Filing', slug: 'gst-return-filing' },
          { label: 'Annual Return (GSTR-9)', slug: 'gstr-9-annual-return' },
          { label: 'GST Refunds', slug: 'gst-refund-claims' },
          { label: 'GST Notice Handling', slug: 'gst-notice-handling' },
        ],
      },
    ],
  },
  {
    num: '04',
    icon: Monitor,
    title: 'Digital Services',
    color: 'navy',
    sections: [
      {
        heading: '',
        items: [
          { label: 'Class 3 DSC Issuance', slug: 'dsc-issuance' },
          { label: 'IEC for Service Exporters', slug: 'iec-service-exporters' },
          { label: 'DSC Renewal / Upgrade', slug: 'dsc-renewal-upgrade' },
        ],
      },
    ],
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Startup & Funding Support',
    color: 'navy',
    sections: [
      {
        heading: '',
        items: [
          { label: 'DPIIT Recognition', slug: 'dpiit-startup-recognition' },
          { label: 'Startup Tax Exemption (80-IAC)', slug: 'startup-tax-exemption-80iac' },
          { label: 'Startup India Registration', slug: 'startup-india-registration' },
          { label: 'Investor Due Diligence Support', slug: 'due-diligence' },
          { label: "Shareholders' Agreement (SHA)", slug: 'shareholders-agreement' },
          { label: 'Share Subscription Agreement', slug: 'share-subscription-agreement' },
          { label: 'MSME (Udyam) Registration', slug: 'msme-udyam-registration' },
          { label: 'Startup Compliance (ROC)', slug: 'roc-event-based-filings' },
        ],
      },
    ],
  },
  {
    num: '06',
    icon: RefreshCw,
    title: 'Business Restructuring & Closure',
    color: 'navy',
    sections: [
      {
        heading: 'Exit & Closure',
        items: [
          { label: 'Company Strike Off', slug: 'company-strike-off' },
          { label: 'Voluntary Winding Up', slug: 'voluntary-winding-up' },
          { label: 'Voluntary Winding Up (IBC)', slug: 'voluntary-winding-up' },
          { label: 'LLP Closure', slug: 'llp-closure' },
          { label: 'GST Cancellation', slug: 'gst-cancellation' },
        ],
      },
      {
        heading: 'Restructuring',
        items: [
          { label: 'Business Structure Conversion', slug: 'business-structure-conversion' },
          { label: 'Change of Registered Office', slug: 'change-of-registered-office' },
          { label: 'Alteration of MOA & AOA', slug: 'moa-aoa-alteration' },
          { label: 'Company Name Change', slug: 'company-name-change' },
        ],
      },
    ],
  },
  {
    num: '07',
    icon: Briefcase,
    title: 'Advisory & Professional Services',
    color: 'navy',
    sections: [
      {
        heading: 'Core Advisory',
        items: [
          { label: 'Due Diligence', slug: 'due-diligence' },
          { label: 'Accounting & Bookkeeping', slug: 'accounting-bookkeeping' },
          { label: 'Secretarial Audit', slug: 'secretarial-audit' },
        ],
      },
      {
        heading: 'Documentation & Legal Support',
        items: [
          { label: 'Drafting & Vetting of Agreements', slug: 'agreement-drafting-vetting' },
          { label: 'Share Subscription Agreement (SSA)', slug: 'share-subscription-agreement' },
          { label: "Shareholders' Agreement (SHA)", slug: 'shareholders-agreement' },
        ],
      },
    ],
  },
  {
    num: '08',
    icon: Lightbulb,
    title: 'Intellectual Property (IPR)',
    color: 'navy',
    sections: [
      {
        heading: '',
        items: [
          { label: 'Trademark Registration', slug: 'trademark-registration' },
          { label: 'Trademark Search & Watch', slug: 'trademark-watch-search' },
          { label: 'Trademark Objection Reply', slug: 'trademark-objection-reply' },
          { label: 'Hearing Representation', slug: 'trademark-hearing-representation' },
          { label: 'Opposition & Counter Statement', slug: 'trademark-cancellation' },
        ],
      },
    ],
  },
];

// ─── Bottom compliance columns ────────────────────────────────────────────────

const bottomCols: BottomCol[] = [
  {
    icon: Scale,
    title: 'Company Law Compliances',
    items: [
      'Mandatory Compliances',
      'Annual Return / Annual Filings',
      'MSME Return',
      'Return of Deposit DPT-3 Return',
      'Minutes and Statutory Registers',
      'Appointment of Auditor',
      'Appointment of Secretarial Auditor',
      'KYC of Directors',
      'Yearly Event-based Directors disclosures',
      'Share Reconciliation Statement',
      'Annual Filing of LLP',
      'Specialised Filings (DIR-3)',
      'Share Reconciliation Statement',
      'RBI and FEMA Compliances',
    ],
  },
  {
    icon: FileText,
    title: 'Tax Compliances',
    items: ['GST Compliance', 'ITR'],
  },
  {
    icon: Calendar,
    title: 'Event Based Compliances',
    items: [
      'Alteration of MOA and AOA',
      'Charge Creation / Satisfaction',
      'Company Name Change',
      'LLP Name Change',
      'Change in Auditor',
      'Change in Object clause of MOA',
      'Transfers of Shares',
      'Director Resignation and Appointment',
      'Changes in Designation of Director',
      'Increase in Authorised Share Capital',
      'Issue of Shares',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Restructuring Compliances',
    items: [
      'Registered Office Shift of Company and LLP',
      'Conversion of Public Limited to Private limited',
      'Conversion of Private Limited to Public limited',
      'Conversion of Company to LLP',
      'Conversion of LLP in to Company',
      'Conversion of OPC in to private limited',
      'Conversion of Private limited in to OPC',
      'Merger and Acquisition',
      'Winding up',
      'Demerger',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property (IPR)',
    items: [
      'Trademark Registration',
      'Public Search & Class Selection',
      'Trademark Objection Reply',
      'Hearing Representation',
      'Opposition & Counter Statement',
    ],
  },
];

// ─── Trust items ──────────────────────────────────────────────────────────────

const trustItems = [
  { icon: Users, title: 'Expert Guidance', sub: 'Experienced Professionals' },
  { icon: ShieldCheck, title: 'Compliant & Secure', sub: '100% Compliance Assured' },
  { icon: Clock, title: 'Timely Service', sub: 'On-time Delivery Guaranteed' },
  { icon: IndianRupee, title: 'Cost Effective', sub: 'Transparent Pricing · Best Value' },
  { icon: Headphones, title: 'End-to-End Support', sub: 'From Start to Success' },
];

// ─── Dot bullet ───────────────────────────────────────────────────────────────

function Dot() {
  return (
    <span
      className="inline-block flex-shrink-0 rounded-full mt-[5px]"
      style={{ width: 7, height: 7, background: '#1e3a5f' }}
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden" style={{ background: '#0a1628' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full" />
        <div className="absolute bottom-5 right-10 w-40 h-40 bg-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-4"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#93c5fd' }}
        >
          Our Services
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
          Services
        </h1>
        <p className="mt-3 text-sm sm:text-base" style={{ color: '#94a3b8' }}>
          End-to-End Corporate, Regulatory &amp; Compliance Solutions
        </p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-10 h-px" style={{ background: '#334155' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} />
          <div className="w-10 h-px" style={{ background: '#334155' }} />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: '8', label: 'Service Categories' },
            { value: '100+', label: 'Service Offerings' },
            { value: '100%', label: 'Compliance Coverage' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs mt-1" style={{ color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Top grid ─────────────────────────────────────────────────────────────────

function TopGrid({ onServiceClick }: { onServiceClick: (slug: string) => void }) {
  return (
    <div className="py-4 px-3" style={{ background: '#f9fafb' }}>
      <div
        className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-[6px]"
      >
        {categoryCols.map((col) => {
          const Icon = col.icon;
          return (
            <div
              key={col.num}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              {/* Header */}
              <div
                className="flex flex-col items-center gap-1.5 px-3 py-4 text-center"
                style={{ background: '#0f2044' }}
              >
                <span
                  className="flex items-center justify-center rounded-xl font-bold"
                  style={{
                    width: 26,
                    height: 26,
                    fontSize: 11,
                    background: 'rgba(255,255,255,0.12)',
                    color: '#93c5fd',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {col.num}
                </span>
                <Icon size={22} strokeWidth={1.6} style={{ color: '#ffffff' }} />
                <span
                  className="font-semibold leading-snug"
                  style={{ fontSize: 12, color: '#e2e8f0' }}
                >
                  {col.title}
                </span>
              </div>

              {/* Sections */}
              <div className="flex flex-col flex-1">
                {col.sections.map((sec, si) => (
                  <div key={si}>
                    {sec.heading && (
                      <div
                        className="px-3 py-1.5 font-bold uppercase tracking-wide"
                        style={{
                          fontSize: 9,
                          color: '#1e3a5f',
                          background: '#eff6ff',
                          borderTop: '1px solid #dbeafe',
                          borderBottom: '1px solid #dbeafe',
                        }}
                      >
                        {sec.heading}
                      </div>
                    )}
                    <ul className="px-3 py-2 space-y-1.5">
                      {sec.items.map((item) =>
                        item.slug ? (
                          <li key={item.label}>
                            <button
                              onClick={() => onServiceClick(item.slug!)}
                              className="flex items-start gap-1.5 text-left w-full group"
                              style={{ fontSize: 8.5 }}
                            >
                              <Dot />
                              <span
                                className="leading-snug group-hover:underline"
                                style={{ color: '#2d4a6e' }}
                              >
                                {item.label}
                              </span>
                            </button>
                          </li>
                        ) : (
                          <li key={item.label} className="flex items-start gap-1.5">
                            <Dot />
                            <span className="leading-snug" style={{ fontSize: 8.5, color: '#2d4a6e' }}>
                              {item.label}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Bottom compliance section ────────────────────────────────────────────────

function BottomSection() {
  return (
    <div
      className="px-3 pt-0 pb-4"
      style={{ background: '#ffffff', borderTop: '3px solid #0f2044' }}
    >
      <div
        className="max-w-[1400px] mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-[6px]"
      >
        {bottomCols.map((col) => {
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ background: '#0f2044' }}
              >
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={15} strokeWidth={1.6} style={{ color: '#ffffff' }} />
                </div>
                <span className="font-semibold leading-snug" style={{ fontSize: 12, color: '#e2e8f0' }}>
                  {col.title}
                </span>
              </div>
              <ul className="px-3 py-2.5 space-y-1.5" style={{ background: '#ffffff' }}>
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <Dot />
                    <span className="leading-snug" style={{ fontSize: 11, color: '#2d4a6e' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Trust bar */}
      <div
        className="max-w-[1400px] mx-auto mt-4 rounded-2xl px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4"
        style={{ background: '#0f2044' }}
      >
        {trustItems.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.title} className="flex flex-col items-center text-center flex-1 min-w-[100px] gap-1">
              <div
                className="rounded-xl flex items-center justify-center mb-1"
                style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.08)' }}
              >
                <Icon size={22} strokeWidth={1.5} style={{ color: '#ffffff' }} />
              </div>
              <span className="font-semibold block" style={{ fontSize: 13, color: '#ffffff' }}>
                {t.title}
              </span>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>{t.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Tagline bar */}
      <div
        className="max-w-[1400px] mx-auto mt-3 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-center gap-3 text-center"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: '#eff6ff' }}
        >
          <Scale size={16} style={{ color: '#1e3a5f' }} />
        </div>
        <span className="font-semibold" style={{ fontSize: 13, color: '#0f2044', letterSpacing: '0.2px' }}>
          One Stop Solution for All Your Corporate &amp; Compliance Needs
        </span>
      </div>
    </div>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: '#0f2044' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-5 right-20 w-48 h-48 bg-white rounded-full" />
        <div className="absolute bottom-0 left-10 w-32 h-32 bg-white rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span
          className="inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-4"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#93c5fd' }}
        >
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Need a Service Not Listed Here?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
          We offer many more specialised services. Reach out and let us know how we can help your business thrive.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{
              background: '#ffffff',
              color: '#0f2044',
            }}
          >
            <ArrowRight size={16} />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: '#f9fafb' }}>
      <HeroSection />
      <TopGrid onServiceClick={(slug) => navigate(`/services/${slug}`)} />
      <BottomSection />
      <CTASection />
    </div>
  );
}