import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
    const filters = [
        { name: 'Expedited Transportation', active: true },
        { name: 'Long-Distance & Regional', active: false },
        { name: 'Montreal Local Delivery', active: false },
        { name: 'Dedicated Transportation', active: false },
        { name: 'Full Truckload', active: false }
    ];

    const serviceCards = [
        {
            title: "Expedited Freight Transportation",
            description: "Time-sensitive shipments handled with care and speed. Available for local and long-distance requirements.",
            badges: [
                { text: "NEW", type: "red" },
                { text: "TOP RATED", type: "red" }
            ],
            image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Long-Distance Transportation",
            description: "Regional and nationwide freight services across Quebec, Ontario, Alberta, BC, and Atlantic Canada.",
            badges: [
                { text: "NATIONWIDE", type: "red" }
            ],
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Montreal Local Delivery Services",
            description: "Local trucking, city pickups, and quick freight movements throughout Montreal and the surrounding area.",
            badges: [
                { text: "LOCAL", type: "blue" }
            ],
            image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Versatile Dedicated Fleet",
            description: "Box trucks, dry vans, refrigerated trucks, and sprinter vans tailored to your specific Canadian freight sizes.",
            badges: [],
            image: "https://images.unsplash.com/photo-1582218884964-b5278dfec4fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="section bg-white pt-24 pb-20" id="services">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-[900px]">
                    <h2 className="text-[42px] sm:text-[52px] font-black leading-[1.1] text-[#1a1a1a] tracking-tight">
                        Discover <br />
                        <span className="text-primary-600">our services</span>
                    </h2>
                    <p className="text-[#6b7280] font-medium mt-5 text-[15px] leading-relaxed max-w-3xl">
                        Falcon Translines Ltd. provides reliable transportation using different types of
                        equipment to accommodate different shipment requirements. We handle both local
                        and long-distance shipments, offering solutions carefully tailored to your freight.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-3 mt-10 mb-10">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 border ${filter.active
                                    ? 'border-primary-500 text-primary-600 bg-red-50/50'
                                    : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 bg-white'
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {serviceCards.map((card, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-[16px] h-[400px] bg-black cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/10 hover:border-primary-500/30"
                        >
                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-[0.65] group-hover:scale-[1.03] group-hover:opacity-[0.55] transition-all duration-700"
                                src={card.image}
                                alt={card.title}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {card.badges.map((badge, bIndex) => (
                                    <span
                                        key={bIndex}
                                        className={`text-white text-[11px] uppercase font-black px-2.5 py-1 rounded-[4px] tracking-wide ${badge.type === 'red' ? 'bg-[#ff0000]' : 'bg-[#007bff]'
                                            }`}
                                    >
                                        {badge.text}
                                    </span>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                <div className="pr-5">
                                    <h3 className="text-white text-[17px] font-bold leading-[1.3] mb-2 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-300 text-[12px] leading-[1.6]">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-[6px] border border-red-500/40 bg-[#111] group-hover:bg-[#cc0000] transition-colors duration-300">
                                    <FiArrowRight className="text-white w-[18px] h-[18px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
