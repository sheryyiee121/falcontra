import React from 'react';

const Advantage = () => {
    const advantages = [
        {
            title: "Flexible Fleet Options",
            description: "Equipped with multiple types of trucks, from sprinters to reefers, to handle any local or long-distance shipment seamlessly."
        },
        {
            title: "Proven Reliability",
            description: "Dependable nationwide freight services that ensure your cargo arrives securely and strictly on schedule, every single time."
        },
        {
            title: "Expedited & Time-Sensitive",
            description: "When time is critical, our experienced team provides rapid, dedicated transportation solutions without unnecessary delays."
        },
        {
            title: "Professional & Responsive",
            description: "Expect end-to-end personalized support, transparent tracking, and clear communication from our dedicated dispatch team."
        },
        {
            title: "Local Montreal Expertise",
            description: "Specialized local trucking, fast city pickups, and reliable freight movements exclusively throughout Montreal and the Quebec area."
        },
        {
            title: "Nationwide Canadian Coverage",
            description: "Comprehensive transport solutions across major corridors, connecting Quebec, Ontario, Alberta, BC, and Atlantic Canada."
        }
    ];

    return (
        <section className="bg-white py-24 pb-32">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-black text-[#1a1a1a] mb-4 tracking-tight">
                        The Falcon <span className="text-primary-600">advantage</span>
                    </h2>
                    <p className="text-gray-800 font-medium text-[15px]">
                        Discover what sets us apart
                    </p>
                </div>

                <div className="max-w-6xl mx-auto border-t border-l border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {advantages.map((adv, index) => (
                            <div
                                key={index}
                                className="border-r border-b border-gray-100 p-10 sm:p-14 text-center hover:bg-gray-50/50 transition-colors duration-300 flex flex-col items-center justify-center min-h-[260px]"
                            >
                                <h3 className="text-[17px] font-bold text-gray-900 mb-4 px-4 leading-snug">
                                    {adv.title}
                                </h3>
                                <p className="text-[14px] text-gray-500 font-normal leading-[1.65] max-w-[280px]">
                                    {adv.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
