import React from 'react';

const FeaturesSection = () => {
    return (
        <div className="mt-[clamp(5rem,13vw,11.5rem)]">
            <section
                aria-labelledby="features-heading"
                className="mx-auto flex max-w-[1440px] flex-col gap-[clamp(5rem,10vw,9rem)] px-5 sm:px-8 lg:px-6"
            >
                <h2 id="features-heading" className="sr-only">
                    What Hickory does
                </h2>

                {/* Feature 1: Analyst Studio */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h3 className="font-display text-display-md text-dark-navy">
                            Analyst Studio
                        </h3>
                        <p className="text-body text-ink-secondary mt-5 max-w-[46ch]">
                            A data pull that took weeks is answered in minutes. You ask for the
                            data you need, and the answer comes back with its sources
                            attached.
                        </p>
                    </div>
                    <div className="rounded-card relative aspect-square overflow-hidden bg-dark-navy">
                        <img
                            src="https://hickory.co/images/plate-credit-unions-918.png"
                            alt=""
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="relative z-10 h-full w-full p-6 sm:p-9">
                            <img
                                src="https://hickory.co/_astro/feature-report.oITreayS_tbv6T.svg"
                                alt=""
                                sizes="(max-width: 1023px) 92vw, 640px"
                                loading="lazy"
                                decoding="async"
                                width="1368"
                                height="1368"
                                className="h-full w-full rounded-xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature 2: Automated Workflows */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="lg:order-2">
                        <h3 className="font-display text-display-md text-dark-navy">
                            Automated Workflows
                        </h3>
                        <p className="text-body text-ink-secondary mt-5 max-w-[46ch]">
                            Four hours of case work becomes a ten minute review. Documentation
                            to respond to a complaint, audit request or testing population is
                            gathered, reviewed against your acceptance criteria, written up,
                            and presented for your review and approval to proceed.
                        </p>
                    </div>
                    <div className="rounded-card relative aspect-square overflow-hidden bg-green lg:order-1">
                        <img
                            src="https://hickory.co/images/institution-duotone-1120.png"
                            alt=""
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="relative z-10 h-full w-full p-6 sm:p-9">
                            <img
                                src="https://hickory.co/_astro/feature-workflow.D2MNlNPE_tbv6T.svg"
                                alt=""
                                sizes="(max-width: 1023px) 92vw, 640px"
                                loading="lazy"
                                decoding="async"
                                width="1368"
                                height="1368"
                                className="h-full w-full rounded-xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Tailored Knowledge Base */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h3 className="font-display text-display-md text-dark-navy">
                            Tailored Knowledge Base
                        </h3>
                        <p className="text-body text-ink-secondary mt-5 max-w-[46ch]">
                            Research you would have sent to outside counsel comes back cited.
                            Questions about the regulations and your own policies are answered
                            based on your institution, not for banks in general.
                        </p>
                    </div>
                    <div className="rounded-card relative aspect-square overflow-hidden bg-yellow">
                        <img
                            src="https://hickory.co/images/plate-fintech-918.png"
                            alt=""
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="relative z-10 h-full w-full p-6 sm:p-9">
                            <img
                                src="https://hickory.co/_astro/feature-library.DlS7G2eL_tbv6T.svg"

                                alt=""
                                sizes="(max-width: 1023px) 92vw, 640px"
                                loading="lazy"
                                decoding="async"
                                width="1368"
                                height="1368"
                                className="h-full w-full rounded-xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesSection;