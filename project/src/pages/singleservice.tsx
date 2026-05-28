// ─── SingleServicePage.tsx ────────────────────────────────────────────────────
// Redesigned with editorial / refined-luxury aesthetic.
// Color theme preserved (navy-950, accent-500, white).
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft,
    CheckCircle2,
    ChevronRight,
    FileText,
    Layers,
    ClipboardList,
    Star,
    Phone,
    Calendar,
    Award,
    Shield,
    Zap,
    Users,
    ArrowUpRight,
    Dot,
} from 'lucide-react';
import { servicesData, ServiceData } from '../data/data';

// ─── Fonts (add to your index.html or tailwind config) ───────────────────────
// <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
//
// tailwind.config.js → theme.extend.fontFamily:
//   heading: ['"DM Serif Display"', 'serif'],
//   body:    ['"DM Sans"', 'sans-serif'],

// ─── Icon helper ──────────────────────────────────────────────────────────────
const whyIcons = [Award, Shield, Zap, Users, FileText, Star];

// ─── Tiny hook: observe when element enters viewport ─────────────────────────
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

// ─── Section wrapper with fade-up reveal ─────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { ref, visible } = useInView();
    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}
        >
            {children}
        </div>
    );
}

// ─── Label pill ───────────────────────────────────────────────────────────────
function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return light ? (
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-white mb-4">
            <span className="w-4 h-px bg-white inline-block" />
            {children}
        </span>
    ) : (
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-accent-600 mb-4">
            <span className="w-4 h-px bg-accent-600 inline-block" />
            {children}
        </span>
    );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ label, title, light = false }: { label: string; title: string; light?: boolean }) {
    return (
        <div className="mb-12">
            <Label light={light}>{label}</Label>
            <h2 className={`text-3xl sm:text-4xl font-heading font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
                {title}
            </h2>
        </div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ServiceHero({ service, onBack }: { service: ServiceData; onBack: () => void }) {
    return (
        <section className="relative min-h-[92vh] flex flex-col justify-end bg-navy-950 overflow-hidden">
            {/* Layered background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial glow */}
                <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-accent-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/4 rounded-full blur-[100px]" />
                {/* Fine dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                {/* Diagonal rule */}
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-500/20 to-transparent" style={{ right: '15%' }} />
            </div>

            {/* Top nav strip */}
            <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-8">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>All Services</span>
                </button>
                {/* Category breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-navy-500">
                    <span>Services</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-navy-300">{service.category}</span>
                </div>
            </div>

            {/* Main content — pinned to bottom */}
            <div className="relative max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-20 pt-32">
                <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-end">
                    {/* Left: headline block */}
                    <div>
                        {/* Category tag */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-500/25 bg-accent-500/8 text-white text-[11px] font-semibold tracking-widest uppercase mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            {service.category}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-heading font-bold text-white leading-[1.05] tracking-tight max-w-2xl">
                            {service.headline}
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-navy-300 leading-relaxed max-w-xl font-light">
                            {service.subheadline}
                        </p>

                        {/* CTA row */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-2xl transition-all duration-200 shadow-xl shadow-accent-500/25 text-sm"
                            >
                                <Calendar className="w-4 h-4" />
                                {service.cta.buttonText}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-navy-800/60 hover:bg-navy-800 text-white font-semibold rounded-2xl transition-colors border border-navy-700/60 text-sm backdrop-blur-sm"
                            >
                                <Phone className="w-4 h-4 text-navy-400" />
                                Call Us Now
                            </a>
                        </div>
                    </div>

                    {/* Right: stat card */}
                    <div className="hidden lg:block">
                        <div className="rounded-3xl border border-navy-800 bg-navy-900/60 backdrop-blur-sm p-7 space-y-6">
                            <p className="text-xs font-semibold tracking-widest uppercase text-navy-500">At a Glance</p>
                            <div className="space-y-4">
                                <StatRow label="Benefits" value={`${service.benefits.length} Key Advantages`} />
                                <StatRow label="Process" value={`${service.processSteps.length}-Step Registration`} />
                                <StatRow label="Doc Groups" value={`${service.documentsRequired.length} Categories`} />
                                <StatRow label="Support" value="End-to-End by P.A.J & Co." />
                            </div>
                            <div className="pt-2 border-t border-navy-800">
                                <p className="text-[11px] text-navy-500 leading-relaxed">
                                    Free consultation · No commitment · Response within 24 hrs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="absolute bottom-0 left-6 sm:left-10 lg:left-16 right-0 h-px bg-gradient-to-r from-accent-500/30 via-navy-700/30 to-transparent" />
        </section>
    );
}

function StatRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start justify-between gap-4">
            <span className="text-xs text-navy-500 font-medium pt-0.5">{label}</span>
            <span className="text-xs text-navy-200 font-semibold text-right leading-snug">{value}</span>
        </div>
    );
}

// ─── Overview ─────────────────────────────────────────────────────────────────
function OverviewSection({ service }: { service: ServiceData }) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
                        {/* Left sticky label */}
                        <div className="lg:sticky lg:top-24">
                            <SectionHeading label="About this service" title="What You Need to Know" />
                            <div className="w-12 h-1 bg-accent-500 rounded-full mb-6" />
                            <p className="text-navy-400 text-sm leading-relaxed">
                                Understand the structure, legal basis, and suitability of this registration before you proceed.
                            </p>
                        </div>
                        {/* Right: paragraphs */}
                        <div className="space-y-6 text-navy-600 text-base leading-relaxed">
                            <p className="text-lg text-navy-700 leading-relaxed font-light">{service.overview.para1}</p>
                            <div className="h-px w-full bg-navy-100" />
                            <p className="leading-relaxed">{service.overview.para2}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
function BenefitsSection({ service }: { service: ServiceData }) {
    return (
        <section className="py-24 bg-navy-950">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <SectionHeading label="Why register" title="Key Benefits" light />
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {service.benefits.map((benefit, i) => (
                        <Reveal key={i} delay={i * 60}>
                            <div className="group relative bg-navy-900 rounded-2xl border border-navy-800 p-6 hover:border-accent-500/40 transition-all duration-300 hover:bg-navy-800/80 overflow-hidden h-full">
                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/8 rounded-full blur-xl" />
                                </div>
                                {/* Number */}
                                <span className="text-[11px] font-bold text-navy-700 tracking-widest mb-4 block">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="font-bold text-white text-sm leading-snug mb-2 group-hover:text-accent-300 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-navy-400 text-sm leading-relaxed">{benefit.detail}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Process Steps ────────────────────────────────────────────────────────────
function ProcessSection({ service }: { service: ServiceData }) {
    const [active, setActive] = useState(0);
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <SectionHeading label="How it works" title="Registration Process" />
                </Reveal>

                <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-2">
                    {/* Step navigator */}
                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {service.processSteps.map((step, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 w-full text-sm ${active === i
                                    ? 'bg-navy-900 text-white shadow-lg'
                                    : 'bg-gray-50 text-navy-500 hover:bg-navy-50 hover:text-navy-700'
                                    }`}
                            >
                                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${active === i ? 'bg-accent-500 text-white' : 'bg-navy-100 text-navy-500'
                                    }`}>
                                    {i + 1}
                                </span>
                                <span className="font-medium line-clamp-2 leading-snug">{step.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <div className="relative">
                        <div
                            key={active}
                            className="bg-navy-950 rounded-3xl border border-navy-800 p-8 sm:p-10 min-h-[220px]"
                            style={{ animation: 'fadeSlideIn 0.3s ease' }}
                        >
                            <style>{`
                                @keyframes fadeSlideIn {
                                    from { opacity: 0; transform: translateY(10px); }
                                    to   { opacity: 1; transform: translateY(0); }
                                }
                            `}</style>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-accent-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                                    {active + 1}
                                </div>
                                <div>
                                    <p className="text-[10px] text-navy-500 font-semibold tracking-widest uppercase mb-1">
                                        Step {active + 1} of {service.processSteps.length}
                                    </p>
                                    <h3 className="text-xl font-heading font-bold text-white leading-snug">
                                        {service.processSteps[active].title}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-navy-300 text-base leading-relaxed pl-14">
                                {service.processSteps[active].detail}
                            </p>

                            {/* Progress bar */}
                            <div className="mt-8 pl-14">
                                <div className="flex gap-1.5">
                                    {service.processSteps.map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${i === active ? 'bg-accent-500 flex-1' : 'bg-navy-800 w-4 hover:bg-navy-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Nav arrows */}
                        <div className="flex gap-2 mt-4 justify-end">
                            <button
                                onClick={() => setActive(Math.max(0, active - 1))}
                                disabled={active === 0}
                                className="w-9 h-9 rounded-xl border border-navy-200 flex items-center justify-center text-navy-500 hover:border-navy-400 hover:text-navy-900 disabled:opacity-30 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setActive(Math.min(service.processSteps.length - 1, active + 1))}
                                disabled={active === service.processSteps.length - 1}
                                className="w-9 h-9 rounded-xl border border-navy-200 flex items-center justify-center text-navy-500 hover:border-navy-400 hover:text-navy-900 disabled:opacity-30 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Documents Required ───────────────────────────────────────────────────────
function DocumentsSection({ service }: { service: ServiceData }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <SectionHeading label="Checklist" title="Documents Required" />
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.documentsRequired.map((group, i) => (
                        <Reveal key={i} delay={i * 80}>
                            <div className="bg-white rounded-3xl border border-navy-100 p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-navy-100">
                                    <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <ClipboardList className="w-4 h-4 text-amber-600" />
                                    </div>
                                    <h3 className="font-bold text-navy-900 text-sm uppercase tracking-wider leading-tight">
                                        {group.category}
                                    </h3>
                                </div>
                                {/* Docs list */}
                                <ul className="space-y-3">
                                    {group.documents.map((doc, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-navy-600 text-sm leading-relaxed">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Why Choose PAJ ───────────────────────────────────────────────────────────
function WhyChooseSection({ service }: { service: ServiceData }) {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative side accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent-500/40 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
                        {/* Left */}
                        <div className="lg:sticky lg:top-24">
                            <SectionHeading label="Our edge" title="Why Choose P.A.J & Co.?" />
                            <p className="text-navy-500 text-sm leading-relaxed mt-2">{service.whyChoosePAJ.intro}</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent-600 hover:text-accent-500 transition-colors group"
                            >
                                Talk to an expert
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Right: stacked cards */}
                        <div className="space-y-3">
                            {service.whyChoosePAJ.points.map((point, i) => {
                                const Icon = whyIcons[i % whyIcons.length];
                                return (
                                    <Reveal key={i} delay={i * 70}>
                                        <div className="group flex items-start gap-5 p-5 rounded-2xl border border-navy-100 bg-white hover:border-accent-200 hover:bg-accent-50/30 transition-all duration-200">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 group-hover:bg-accent-500/10 flex items-center justify-center transition-colors">
                                                <Icon className="w-4.5 h-4.5 text-navy-500 group-hover:text-accent-600 transition-colors" strokeWidth={1.7} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-navy-900 text-sm mb-1">{point.title}</h3>
                                                <p className="text-navy-500 text-sm leading-relaxed">{point.detail}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner({ service }: { service: ServiceData }) {
    return (
        <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/8 rounded-full blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal>
                    <div className="text-center">
                        <Label light>{service.category}</Label>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                            {service.cta.headline}
                        </h2>
                        <p className="mt-5 text-navy-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
                            {service.cta.subline}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:info@pajandco.com"
                                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-2xl transition-all duration-200 shadow-xl shadow-accent-500/20 text-sm"
                            >
                                <Calendar className="w-4 h-4" />
                                {service.cta.buttonText}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center gap-2.5 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-2xl transition-colors border border-navy-700 text-sm"
                            >
                                <Phone className="w-4 h-4 text-navy-400" />
                                Call for Quick Query
                            </a>
                        </div>

                        <p className="mt-6 text-navy-600 text-xs tracking-wide">
                            Free consultation · No commitment · Response within 24 hours
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function SingleServicePage({
    slug,
    onBack,
}: {
    slug: string;
    onBack: () => void;
}) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <p className="text-navy-500 text-lg mb-4">Service not found.</p>
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-body antialiased">
            <ServiceHero service={service} onBack={onBack} />
            <OverviewSection service={service} />
            <BenefitsSection service={service} />
            <ProcessSection service={service} />
            <DocumentsSection service={service} />
            <WhyChooseSection service={service} />
            <CTABanner service={service} />
        </div>
    );
}