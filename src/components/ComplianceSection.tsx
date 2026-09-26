import React from 'react';

const ComplianceSection = () => {
    return (
        <div className="mt-[clamp(5rem,13vw,11.5rem)]">
            <section
                aria-labelledby="compliance-heading"
                className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[49px]"
            >
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <h2
                        id="compliance-heading"
                        className="scroll-fill text-balance text-display-lg scroll-fill--navy max-w-[12ch]"
                    >
                        <span
                            className="scroll-fill-word"

                        >
                            Built
                        </span>{' '}
                        <span
                            className="scroll-fill-word"

                        >
                            with
                        </span>{' '}
                        <span
                            className="scroll-fill-word"

                        >
                            your
                        </span>{' '}
                        <br className="hidden lg:inline" />
                        <span
                            className="scroll-fill-word"

                        >
                            exam
                        </span>{' '}
                        <span
                            className="scroll-fill-word"

                        >
                            in
                        </span>{' '}
                        <span
                            className="scroll-fill-word"
                        >
                            mind.
                        </span>
                    </h2>

                    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                        {/* Item 1: Independent model validation */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M224.42,104.2c-3.9-4.07-7.93-8.27-9.55-12.18-1.5-3.63-1.58-9-1.67-14.68-.14-9.38-.3-20-7.42-27.12S188,42.94,178.66,42.8c-5.68-.09-11-.17-14.68-1.67-3.91-1.62-8.11-5.65-12.18-9.55C145.16,25.22,137.64,18,128,18s-17.16,7.22-23.8,13.58c-4.07,3.9-8.27,7.93-12.18,9.55-3.63,1.5-9,1.58-14.68,1.67-9.38.14-20,.3-27.12,7.42S42.94,68,42.8,77.34c-.09,5.68-.17,11-1.67,14.68-1.62,3.91-5.65,8.11-9.55,12.18C25.22,110.84,18,118.36,18,128s7.22,17.16,13.58,23.8c3.9,4.07,7.93,8.27,9.55,12.18,1.5,3.63,1.58,9,1.67,14.68.14,9.38.3,20,7.42,27.12S68,213.06,77.34,213.2c5.68.09,11,.17,14.68,1.67,3.91,1.62,8.11,5.65,12.18,9.55C110.84,230.78,118.36,238,128,238s17.16-7.22,23.8-13.58c4.07-3.9,8.27-7.93,12.18-9.55,3.63-1.5,9-1.58,14.68-1.67,9.38-.14,20-.3,27.12-7.42s7.28-17.74,7.42-27.12c.09-5.68.17-11,1.67-14.68,1.62-3.91,5.65-8.11,9.55-12.18C230.78,145.16,238,137.64,238,128S230.78,110.84,224.42,104.2Zm-8.66,39.3c-4.67,4.86-9.5,9.9-12,15.9-2.38,5.74-2.48,12.52-2.58,19.08-.11,7.44-.23,15.14-3.9,18.82s-11.38,3.79-18.82,3.9c-6.56.1-13.34.2-19.08,2.58-6,2.48-11,7.31-15.91,12-5.25,5-10.68,10.24-15.49,10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12-5.74-2.38-12.52-2.48-19.08-2.58-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08-2.48-6-7.31-11-12-15.91C35.21,138.24,30,132.81,30,128s5.21-10.24,10.24-15.5c4.67-4.86,9.5-9.9,12-15.9,2.38-5.74,2.48-12.52,2.58-19.08.11-7.44.23-15.14,3.9-18.82s11.38-3.79,18.82-3.9c6.56-.1,13.34-.2,19.08-2.58,6-2.48,11-7.31,15.91-12C117.76,35.21,123.19,30,128,30s10.24,5.21,15.5,10.24c4.86,4.67,9.9,9.5,15.9,12,5.74,2.38,12.52,2.48,19.08,2.58,7.44.11,15.14.23,18.82,3.9s3.79,11.38,3.9,18.82c.1,6.56.2,13.34,2.58,19.08,2.48,6,7.31,11,12,15.91,5,5.25,10.24,10.68,10.24,15.49S220.79,138.24,215.76,143.5ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    Independent model validation
                                </span>
                            </div>
                        </li>

                        {/* Item 2: Virtual private cloud, single tenant */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Zm36.24-94.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L144,151.51l43.76-43.75A6,6,0,0,1,196.24,107.76Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    Virtual private cloud, single tenant
                                </span>
                            </div>
                        </li>

                        {/* Item 3: Every action logged */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M166,152a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,152Zm-6-38H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm54-66V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V48A14,14,0,0,1,56,34H93.17a45.91,45.91,0,0,1,69.66,0H200A14,14,0,0,1,214,48ZM94,64v2h68V64a34,34,0,0,0-68,0ZM202,48a2,2,0,0,0-2-2H170.33A45.77,45.77,0,0,1,174,64v8a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V64a45.77,45.77,0,0,1,3.67-18H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    Every action logged
                                </span>
                            </div>
                        </li>

                        {/* Item 4: Encrypted in transit and at rest */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-82-94a26,26,0,0,0-6,51.29V184a6,6,0,0,0,12,0V165.29A26,26,0,0,0,128,114Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,128,154Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    Encrypted in transit and at rest
                                </span>
                            </div>
                        </li>

                        {/* Item 5: SOC 2 */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M126,136a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h48A6,6,0,0,1,126,136Zm-6-38H72a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm110,62.62V224a6,6,0,0,1-9,5.21l-25-14.3-25,14.3a6,6,0,0,1-9-5.21V198H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14V87.38a49.91,49.91,0,0,1,0,73.24ZM196,86a38,38,0,1,0,38,38A38,38,0,0,0,196,86ZM162,186V160.62a50,50,0,0,1,56-81.51V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2Zm56-17.11a49.91,49.91,0,0,1-44,0v44.77l19-10.87a6,6,0,0,1,6,0l19,10.87Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    SOC 2
                                </span>
                            </div>
                        </li>

                        {/* Item 6: PCI DSS */}
                        <li className="rounded-card aspect-square overflow-hidden bg-white">
                            <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="text-dark-green shrink-0"
                                    aria-hidden="true"
                                >
                                    <path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" />
                                </svg>
                                <span className="text-small text-dark-green text-center text-balance">
                                    PCI DSS
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ComplianceSection;