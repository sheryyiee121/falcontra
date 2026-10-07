import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What areas do you serve?",
            answer: "Falcon Translines Ltd. provides transportation services throughout Canada, including major markets in Quebec, Ontario, Alberta, British Columbia, and Atlantic Canada."
        },
        {
            question: "Do you handle local Montreal deliveries?",
            answer: "Yes, in addition to long-distance transportation, we provide dedicated local trucking services in Montreal and the surrounding Quebec region for city pickups and rapid freight movements."
        },
        {
            question: "What types of trucks do you operate?",
            answer: "Our modern, versatile fleet includes Box Trucks, Dry Vans, Refrigerated Trucks (Reefers), and agile Sprinter Vans to accommodate various freight sizes."
        },
        {
            question: "How can I request an expedited shipment?",
            answer: "You can request a quote or book a truck directly through our website's contact forms, or reach out to our dispatch team for immediate assistance with time-sensitive shipments."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-gray-50 py-24" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] sm:text-[48px] font-black text-[#1a1a1a] tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 font-medium text-[16px]">
                        Everything you need to know about Falcon Translines.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border rounded-[12px] bg-white transition-all overflow-hidden cursor-pointer ${isOpen ? 'border-primary-500 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            >
                                <div className="px-6 py-5 flex justify-between items-center bg-white">
                                    <h3 className={`font-bold text-[16px] sm:text-[17px] ${isOpen ? 'text-primary-600' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'border-primary-500 text-primary-600 bg-red-50' : 'border-gray-200 text-gray-400'}`}>
                                        {isOpen ? '−' : '+'}
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="px-6 pb-6 pt-2 bg-white">
                                        <p className="text-gray-500 leading-relaxed text-[15px]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
