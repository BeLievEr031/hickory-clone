import React, { useState } from 'react';

const audiences = [
    {
        id: 'banks',
        label: 'Banks',
        bgImage: 'https://hickory.co/images/institution-duotone-1120.png',
        svgImage: 'https://hickory.co/_astro/audience-banks.C3W9i17O_tbv6T.svg',
        panelText:
            'Cover more programs and partners with the team you have. Agents do the evidence gathering; your people spend their time on judgment.',
    },
    {
        id: 'fintech',
        label: 'Scaled fintechs',
        bgImage: 'https://hickory.co/images/plate-fintech-918.png',
        svgImage: 'https://hickory.co/_astro/audience-fintech.CfUP1z3f_tbv6T.svg',
        panelText:
            'Audit requests, bank reporting, rolling request lists, assembled by agents in a fraction of the time. Your compliance team reviews and decides.',
    },
    {
        id: 'new-programs',
        label: 'New programs',
        bgImage: 'https://hickory.co/images/plate-new-programs-918.png',
        svgImage: 'https://hickory.co/_astro/audience-new-programs.iWy2Sn9M_tbv6T.svg',
        panelText:
            'Stand up a compliant program in weeks. Agents draft the policies, map the controls, and gather what the bank will ask for; your team judges what ships.',
    },
    {
        id: 'credit-unions',
        label: 'Credit unions',
        bgImage: 'https://hickory.co/images/plate-credit-unions-918.png',
        svgImage: 'https://hickory.co/_astro/audience-credit-unions.B5pOwoyA_tbv6T.svg',
        panelText:
            'More judgment, less evidence gathering. Agents do the first pass on alerts, policy review, and testing prep, and your people make every decision.',
    },
];

const AudienceSection = () => {
    const [activeAudience, setActiveAudience] = useState('banks');

    return (
        <div className="mt-[clamp(5rem,13vw,11.5rem)]">
            <section aria-labelledby="audience-heading" className="audience">
                <div className="audience__runway">
                    <div className="audience__pin">
                        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8">
                            <div className="py-20 lg:py-0">
                                <h2
                                    id="audience-heading"
                                    className="text-display-lg text-dark-navy text-center text-balance"
                                >
                                    One platform for regulatory programs
                                </h2>

                                <fieldset className="audience__group mt-8 border-0 p-0 lg:mt-10">
                                    <legend className="sr-only">Choose an audience</legend>

                                    <div className="audience__row grid items-center gap-10 lg:grid-cols-[1fr_459px_1fr] lg:gap-12">
                                        {/* Tabs Navigation */}
                                        <div className="audience__tabs lg:justify-self-end">
                                            <span className="audience__marker" aria-hidden="true"></span>
                                            <ul className="audience__list">
                                                {audiences.map((item) => (
                                                    <li key={item.id} data-tab={item.id}>
                                                        <button
                                                            type="button"
                                                            onClick={() => setActiveAudience(item.id)}
                                                            className={`audience__label text-heading bg-transparent border-none cursor-pointer text-left p-0 transition-opacity ${activeAudience === item.id ? 'opacity-100 font-bold' : 'opacity-70'
                                                                }`}
                                                        >
                                                            {item.label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Plates (Images) */}
                                        <div className="audience__plates grid">
                                            {audiences.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className={`audience__plate rounded-card relative aspect-[459/515] h-full w-full overflow-hidden ${activeAudience === item.id ? 'block' : 'hidden'
                                                        }`}
                                                    data-plate={item.id}
                                                >
                                                    <img
                                                        src={item.bgImage}
                                                        alt=""
                                                        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                                                        loading="eager"
                                                    />
                                                    <div className="relative z-10 h-full w-full p-4 sm:p-6">
                                                        <img
                                                            src={item.svgImage}
                                                            alt=""
                                                            loading="eager"
                                                            decoding="async"
                                                            width="1368"
                                                            height="1368"
                                                            className="h-full w-full rounded-lg object-contain shadow-2xl"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Panels (Text Description) */}
                                        <div className="audience__panels grid lg:max-w-[272px]">
                                            {audiences.map((item) => (
                                                <p
                                                    key={item.id}
                                                    className={`audience__panel text-body text-ink-secondary ${activeAudience === item.id ? 'block' : 'hidden'
                                                        }`}
                                                    data-panel={item.id}
                                                >
                                                    {item.panelText}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-12 flex justify-center">
                                        <a
                                            href="/book-a-demo"
                                            className="text-label inline-flex items-center justify-center rounded-button whitespace-nowrap px-4 min-h-[var(--size-control)] lg:min-h-[var(--size-control-desktop)] btn-sweep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green text-white [--btn-rest:var(--color-dark-navy)] [--btn-sweep:var(--color-white)] [--btn-hover-text:var(--color-dark-navy)]"
                                        >
                                            <span className="btn-label">
                                                <span>Book a demo</span>
                                                <span aria-hidden="true">Book a demo</span>
                                            </span>
                                        </a>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AudienceSection;