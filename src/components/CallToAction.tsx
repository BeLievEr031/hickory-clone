import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction({
    heading = "Start with your worst backlog.",
    ledeText = "Let our experts help you create a real automated solution.",
    ctaText = "Book a demo",
    ctaLink = "/book-a-demo",
    bgPatternSrc = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80",
    onCtaClick = null,
}) {
    // Split heading into words for individual scroll-fill styling effect simulation or custom animation
    const words = heading.split(" ");

    return (
        <div className="mt-[clamp(3rem,8vw,8rem)] w-full">
            <section aria-labelledby="cta-heading" className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-6">
                <div className="rounded-3xl bg-slate-900 relative overflow-hidden lg:min-h-[570px] shadow-2xl border border-slate-800">

                    {/* Background decorative image pattern with opacity overlay */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <img
                            src={bgPatternSrc}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay filter blur-[1px]"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent"></div>
                    </div>

                    {/* Content container */}
                    <div className="relative z-10 grid h-full gap-10 p-8 sm:p-12 md:grid-cols-2 md:gap-6 lg:min-h-[570px] lg:p-16 items-center">

                        {/* Heading with scroll-fill inspired gradient typography */}
                        <h2
                            id="cta-heading"
                            className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance"
                        >
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className="inline-block mr-3 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                                >
                                    {word}
                                </span>
                            ))}
                        </h2>

                        {/* Sub-content & CTA Button */}
                        <div className="flex flex-col md:items-end md:justify-end text-left md:text-right">
                            <div className="lg:max-w-[485px]">
                                <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
                                    {ledeText}
                                </p>

                                <div className="mt-8 flex md:justify-end">
                                    <a
                                        href={ctaLink}

                                        className="group relative inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span>{ctaText}</span>
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}