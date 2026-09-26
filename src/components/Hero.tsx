import React from 'react'

function Hero() {
    return (
        <>
            <section
                aria-labelledby="hero-heading"
                className="hero mt-6 lg:mt-12"
                data-astro-cid-yodha2z4=""
            >
                <div
                    className="hero__card bg-dark-green relative flex items-center overflow-hidden"
                    data-astro-cid-yodha2z4=""
                >
                    <img
                        src="https://hickory.co/images/institution-duotone-2340.png"
                        sizes="100vw"
                        alt=""
                        width={2340}
                        height={1946}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="eager"
                        decoding="async"
                        data-astro-cid-yodha2z4="true"
                    />
                    <div
                        className="bg-dark-green/65 absolute inset-0"
                        aria-hidden="true"
                        data-astro-cid-yodha2z4=""
                    />
                    <div
                        className="relative z-10 w-full px-6 py-20 text-center sm:px-10 lg:px-[clamp(2.5rem,6vw,6rem)] lg:py-28"
                        data-astro-cid-yodha2z4=""
                    >
                        <div className="mx-auto max-w-[60rem]" data-astro-cid-yodha2z4="">
                            <h1
                                id="hero-heading"
                                className="text-display-lg text-light-ivory text-balance"
                                data-astro-cid-yodha2z4=""
                            >
                                Give Your Compliance, BSA, and Ops Teams Superpowers
                            </h1>
                            <p
                                className="hero__lede text-lede text-white mx-auto mt-6 max-w-[44rem]"
                                data-astro-cid-yodha2z4=""
                            >
                                With Hickory your team has better access to data, help with supporting
                                work, and tailored insights
                            </p>
                            <a
                                href="/book-a-demo"
                                className="text-label inline-flex items-center justify-center rounded-button whitespace-nowrap px-4 min-h-[var(--size-control)] lg:min-h-[var(--size-control-desktop)] btn-sweep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green text-dark-green [--btn-rest:var(--color-white)] [--btn-sweep:var(--color-dark-navy)] [--btn-hover-text:var(--color-white)] mt-10"
                                data-astro-cid-yodha2z4="true"
                            >
                                <span className="btn-label">
                                    <span>Book a demo</span>
                                    <span aria-hidden="true">Book a demo</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero