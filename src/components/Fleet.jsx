import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Fleet = () => {
    const fleetTypes = [
        {
            name: "Dry Vans",
            image: "/images/dryvan.png"
        },
        {
            name: "Box Trucks",
            image: "/images/boxtruck.png"
        },
        {
            name: "Stepdecks & Flatbeds",
            image: "/images/stepdeck.png"
        },
        {
            name: "Hot Shot Trucks",
            image: "/images/hotshot.png"
        },
        {
            name: "Conestoga Trailers",
            image: "/images/contegesa.png"
        },
        {
            name: "Refrigerated / Reefers",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="bg-white py-24" id="fleet">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center lg:items-center">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 xl:w-1/3">
                        <h2 className="text-[44px] sm:text-[54px] font-black leading-[1.05] text-[#1a1a1a] tracking-tight mb-6">
                            Explore our <br className="hidden lg:block" />
                            <span className="text-primary-600">versatile fleet</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-[16px] leading-[1.7] mb-10 max-w-lg">
                            We provide transportation using different types of equipment to accommodate various freight sizes, specialized shipment requirements, and strict delivery timelines across Canada.
                        </p>
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-8 rounded-[8px] transition-all shadow-md text-[15px]">
                            Book a Truck <FiArrowRight className="w-[18px] h-[18px]" />
                        </a>
                    </div>

                    {/* Right Grid */}
                    <div className="w-full lg:w-2/3 xl:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6">
                            {fleetTypes.map((fleet, index) => (
                                <div
                                    key={index}
                                    className="relative bg-[#f8f9fa] border border-gray-100 rounded-[16px] overflow-hidden group cursor-pointer hover:shadow-lg hover:border-primary-500/20 transition-all duration-300 flex flex-col h-[280px]"
                                >
                                    <div className="p-5 flex justify-between items-start z-10">
                                        <h3 className="font-bold text-[17px] text-gray-900 tracking-tight pr-4">
                                            {fleet.name}
                                        </h3>
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-[6px] border border-gray-200 bg-white group-hover:border-primary-500 group-hover:text-primary-600 transition-colors">
                                            <FiArrowRight className="text-gray-400 group-hover:text-primary-600 w-4 h-4 transition-colors" />
                                        </div>
                                    </div>

                                    {/* Image Container - Using object-contain for PNG cutouts */}
                                    <div className="absolute bottom-2 left-0 right-0 px-4 h-[180px] sm:h-[190px] flex items-end justify-center pointer-events-none">
                                        <img
                                            src={fleet.image}
                                            alt={fleet.name}
                                            className="w-full max-h-full object-contain mb-2 group-hover:scale-[1.12] transition-transform duration-500 ease-out transform-gpu origin-bottom pointer-events-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Fleet;
