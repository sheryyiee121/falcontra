import React from 'react';
import Setup from '../components/Setup';

const truckData = {
    'box-truck': {
        title: "26ft Box Truck Services",
        image: "/images/boxtruck.png",
        info: "Our 26ft Box Trucks provide exceptional versatility for regional and local freight. They feature enclosed, secure environments shielding your cargo from the elements.",
        capacity: "Up to 10,000 lbs",
        loading: "Loaded via rear dock-level doors or specialized liftgates for locations without docks.",
        bestFor: "LTL (Less Than Truckload), residential deliveries, local freight, and navigating tight city spaces."
    },
    'dry-van': {
        title: "Dry Van Services",
        image: "/images/dryvan.png",
        info: "Dry vans are the most common and versatile freight transportation vehicles. These fully enclosed trailers offer a highly secure, weather-protected environment.",
        capacity: "Up to 45,000 lbs (Standard 53ft)",
        loading: "Loaded strictly from the rear via standard commercial loading docks or ramps.",
        bestFor: "Palletized general cargo, retail goods, electronics, and standard non-perishable freight."
    },
    'step-deck': {
        title: "Step Deck Services",
        image: "/images/stepdeck.png",
        info: "Step Deck trailers, also known as drop decks, feature a lowered deck suited for transporting extremely tall cargo that exceeds standard height limits on regular flatbeds.",
        capacity: "Up to 48,000 lbs",
        loading: "Open deck capabilities allow loading from the top (via crane) or sides (via forklift).",
        bestFor: "Heavy machinery, tall industrial equipment, agricultural vehicles, and oversized commodities."
    },
    'reefer': {
        title: "Refrigerated (Reefer) Services",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        info: "Reefers are specialized, temperature-controlled trailers designed specifically to safely transport perishable or climate-sensitive commodities across any distance.",
        capacity: "Up to 44,000 lbs",
        loading: "Loaded from the rear via standard commercial loading docks.",
        bestFor: "Food products, beverages, pharmaceuticals, and sensitive chemicals."
    },
    'flatbed': {
        title: "Flatbed Services",
        image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        info: "Flatbed trailers provide open, unrestricted loading space. They are the backbone of the construction and manufacturing transport industry.",
        capacity: "Up to 48,000 lbs",
        loading: "Accessible from the sides, top, and rear using forklifts, overhead cranes, or specialized lifts.",
        bestFor: "Construction materials, steel beams, pipes, and robust outdoor cargo."
    },
    'hotshot': {
        title: "Hotshot Services",
        image: "/images/hotshot.png",
        info: "Hotshot trucking involves agile, medium-to-heavy duty trucks pulling specialized gooseneck trailers for rapid, highly expedited deliveries.",
        capacity: "10,000 - 16,500 lbs",
        loading: "Open deck accessibility for quick loading and unloading.",
        bestFor: "Urgent shipments, time-critical equipment, expedited LTL (Less Than Truckload), and fast regional moves."
    },
    'conestoga': {
        title: "Conestoga Trailer Services",
        image: "/images/contegesa.png",
        info: "Conestoga trailers feature an innovative rolling tarp system, providing the versatile loading of a flatbed with the weather protection of a dry van—all without having a heavy physical tarp touching the cargo.",
        capacity: "Up to 44,000 lbs",
        loading: "Rolling accordion tarp opens completely, allowing top and side loading.",
        bestFor: "Delicate machinery, oddly shaped goods, and highly sensitive freight requiring full protection."
    }
};

const TruckPage = ({ hash }) => {
    // Extract slug from #truck/slug
    const slug = hash.replace('#truck/', '');
    const truck = truckData[slug] || truckData['box-truck'];

    return (
        <div className="w-full bg-white pb-20">
            {/* Page Header */}
            <div className="bg-gray-50 pt-32 pb-20 px-4 sm:px-8 lg:px-12 xl:px-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h1 className="text-[44px] sm:text-[56px] font-black text-[#1a1a1a] leading-tight tracking-tight mb-6">
                            {truck.title}
                        </h1>
                        <p className="text-[18px] text-gray-500 font-medium leading-relaxed max-w-2xl">
                            {truck.info}
                        </p>
                    </div>

                    {/* Truck Image Display */}
                    <div className="w-full md:w-[400px] flex-shrink-0 bg-white rounded-[20px] p-6 shadow-xl border border-gray-50 relative overflow-hidden flex items-center justify-center">
                        <img
                            src={truck.image}
                            alt={truck.title}
                            className="w-full h-auto max-h-[220px] object-contain rounded-[12px] relative z-10"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Truck Specifications */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
                <h2 className="text-[32px] font-black text-gray-900 mb-10">Vehicle Capabilities</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#f8f9fa] border border-gray-100 rounded-[16px] p-8 hover:border-primary-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-xl mb-6">
                            ⚖️
                        </div>
                        <h3 className="text-[17px] font-bold text-gray-900 mb-3">Load Capacity</h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                            {truck.capacity}
                        </p>
                    </div>

                    <div className="bg-[#f8f9fa] border border-gray-100 rounded-[16px] p-8 hover:border-primary-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-xl mb-6">
                            🔄
                        </div>
                        <h3 className="text-[17px] font-bold text-gray-900 mb-3">Loading Process</h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                            {truck.loading}
                        </p>
                    </div>

                    <div className="bg-[#f8f9fa] border border-gray-100 rounded-[16px] p-8 hover:border-primary-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-xl mb-6">
                            📦
                        </div>
                        <h3 className="text-[17px] font-bold text-gray-900 mb-3">Ideal Cargo</h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                            {truck.bestFor}
                        </p>
                    </div>
                </div>
            </div>

            {/* Render universal Setup Action (Form Banner) */}
            <Setup />

        </div>
    );
};

export default TruckPage;
