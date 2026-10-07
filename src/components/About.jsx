import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
    return (
        <section className="bg-white py-24 pb-32" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">

                    {/* Left Column Text */}
                    <div className="w-full lg:w-[45%]">
                        <h2 className="text-[52px] sm:text-[64px] font-black leading-tight text-[#1a1a1a] tracking-tight mb-2">
                            About <span className="text-primary-600">us</span>
                        </h2>
                        <p className="text-gray-400 font-medium text-[16px] sm:text-[18px] mb-8 tracking-wide">
                            Our Impact in Numbers
                        </p>

                        <div className="text-gray-800 text-[17px] sm:text-[19px] leading-[1.8] font-medium space-y-6 mb-10 max-w-[540px]">
                            <p>
                                <strong className="text-primary-600 font-bold">Falcon Translines Ltd.</strong> is a Canadian transportation and freight carrier based in Quebec. We are fully equipped with multiple types of trucks to handle both local Montreal deliveries and long-distance shipments across Canada.
                            </p>
                            <p>
                                What sets us apart is our professional and dependable approach. From expedited freight to dedicated regional routes, we tailor our transportation solutions to fit your unique shipment requirements, ensuring your cargo arrives safely and on time.
                            </p>
                        </div>

                        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-4 px-10 rounded-[8px] transition-colors shadow-sm text-[16px]">
                            Learn more about us <FiArrowRight className="w-[20px] h-[20px]" />
                        </a>
                    </div>

                    {/* Right Column Stats Grid */}
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <div className="flex gap-4 sm:gap-6 w-full max-w-[540px]">

                            {/* Column 1 of Stats */}
                            <div className="flex flex-col gap-4 sm:gap-6 w-1/2">
                                {/* Stat Card 1 */}
                                <div className="bg-[#f9f9f9] border border-gray-100 rounded-[16px] p-6 sm:p-8 flex flex-col justify-between h-[180px] sm:h-[220px]">
                                    <div className="text-[40px] sm:text-[56px] font-black text-[#1a1a1a] leading-none tracking-tighter">
                                        10<span className="text-[#007bff]">+</span>
                                    </div>
                                    <div className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-snug max-w-[120px]">
                                        Years of <br /> Experience
                                    </div>
                                </div>

                                {/* Stat Card 2 */}
                                <div className="bg-[#f9f9f9] border border-gray-100 rounded-[16px] p-6 sm:p-8 flex flex-col justify-between h-[180px] sm:h-[220px]">
                                    <div className="text-[40px] sm:text-[56px] font-black leading-none tracking-tighter">
                                        <span className="text-[#007bff]">10M</span><span className="text-[#007bff]">+</span>
                                    </div>
                                    <div className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-snug max-w-[120px]">
                                        Miles <br /> Driven
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 of Stats (Staggered Down) */}
                            <div className="flex flex-col gap-4 sm:gap-6 w-1/2 pt-12 sm:pt-16">
                                {/* Stat Card 3 */}
                                <div className="bg-[#f9f9f9] border border-gray-100 rounded-[16px] p-6 sm:p-8 flex flex-col justify-between h-[180px] sm:h-[220px]">
                                    <div className="text-[40px] sm:text-[56px] font-black text-[#1a1a1a] leading-none tracking-tighter">
                                        50<span className="text-[#007bff]">+</span>
                                    </div>
                                    <div className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-snug max-w-[120px]">
                                        Versatile <br /> Fleet
                                    </div>
                                </div>

                                {/* Stat Card 4 */}
                                <div className="bg-[#f9f9f9] border border-gray-100 rounded-[16px] p-6 sm:p-8 flex flex-col justify-between h-[180px] sm:h-[220px]">
                                    <div className="text-[40px] sm:text-[56px] font-black text-[#1a1a1a] leading-none tracking-tighter">
                                        500<span className="text-[#007bff]">+</span>
                                    </div>
                                    <div className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-snug max-w-[120px]">
                                        Deliveries <br /> Monthly
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
