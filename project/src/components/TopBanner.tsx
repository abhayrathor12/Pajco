import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
interface TopBannerProps {
    visible: boolean;
}
export default function TopBanner({ visible }: TopBannerProps) {
    return (
        <div
            className={`fixed top-0 left-0 right-0 z-[60] bg-navy-950 text-navy-300 text-xs overflow-hidden transition-all duration-300 ${visible ? 'h-9 opacity-100' : 'h-0 opacity-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

                {/* Left — contact info */}
                <div className="flex items-center gap-4">
                    <a
                        href="mailto:info@pajco.in"
                        className="flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors"
                    >
                        <Mail size={13} className="text-amber-400 shrink-0" />
                        info@pajco.in
                    </a>
                    <span className="w-px h-3.5 bg-white/15" />
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors"
                    >
                        <Phone size={13} className="text-amber-400 shrink-0" />
                        +91 98765 43210
                    </a>
                </div>

                {/* Right — social icons */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://instagram.com/YOUR_HANDLE"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-navy-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        {/* Instagram SVG */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/company/YOUR_HANDLE"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-navy-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a
                        href="https://facebook.com/YOUR_HANDLE"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-navy-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>
                </div>

            </div>
        </div >
    );
}