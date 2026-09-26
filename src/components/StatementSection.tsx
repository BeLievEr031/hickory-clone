import React from 'react';

const StatementSection = () => {
    return (
        <div className="mt-[clamp(5rem,13vw,11.5rem)]">
            <section
                aria-labelledby="statement-heading"
                className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[49px]"
            >
                <h2 id="statement-heading" className="sr-only">
                    Put AI to work at your bank, your fintech, your credit union, or your new program.
                </h2>
                <div aria-hidden="true">
                    <p className="scroll-fill text-balance text-display-lg scroll-fill--navy max-w-[22ch]">
                        <span
                            className="scroll-fill-word"
                        // style={{ '--fill-from': '15.00%', '--fill-to': '28.05%' }}
                        >
                            Put
                        </span>{' '}
                        <span
                            className="scroll-fill-word"
                        // style={{ '--fill-from': '22.25%', '--fill-to': '35.30%' }}
                        >
                            AI
                        </span>{' '}
                        <span
                            className="scroll-fill-word"
                        // style={{ '--fill-from': '29.50%', '--fill-to': '42.55%' }}
                        >
                            to
                        </span>{' '}
                        <span
                            className="scroll-fill-word"
                        // style={{ '--fill-from': '36.75%', '--fill-to': '49.80%' }}
                        >
                            work
                        </span>{' '}
                    </p>
                    {/* <div className="text-display-lg text-dark-navy text-balance">
                        at your&nbsp;
                        <span className="rotator inline-grid text-left align-baseline">
                            <span
                                className="rotator__word"
                                style={{ animationDelay: '0s' }}
                            >
                                bank.
                            </span>
                            <span
                                className="rotator__word"
                                style={{ animationDelay: '2.5s' }}
                            >
                                fintech.
                            </span>
                            <span
                                className="rotator__word"
                                style={{ animationDelay: '5s' }}
                            >
                                credit union.
                            </span>
                            <span
                                className="rotator__word"
                                style={{ animationDelay: '7.5s' }}
                            >
                                program.
                            </span>
                        </span>
                    </div> */}
                </div>

                <div className="border-rule mt-10 border-t lg:mt-14">
                    <div className="grid gap-8 pt-8 lg:grid-cols-3 lg:gap-12 lg:pt-[25px]">
                        <p className="text-lede text-dark-navy lg:col-span-2 lg:max-w-[26ch]">
                            Experts in Compliance, BSA, and Banking Operations build workflows
                            tailored to you.
                        </p>
                        <p className="text-body text-ink-secondary lg:col-start-3">
                            Hickory agents take on the reviews, assessments, and reports
                            inside your program.{' '}
                            <strong className="text-ink font-semibold">
                                Your team gets 10x more done and still makes every decision.
                            </strong>{' '}
                            All workflows run in a fully audited system: documented, cited and
                            ready for your exam.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatementSection;