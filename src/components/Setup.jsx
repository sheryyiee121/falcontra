import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Setup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(`Hi, I'm requesting a setup quote.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
        window.open(`https://wa.me/15144648797?text=${text}`, '_blank');
    };

    return (
        <section className="bg-white py-24 pb-40 lg:pb-32 px-4 sm:px-8 lg:px-12 xl:px-20" id="contact">
            <div className="max-w-[1400px] mx-auto rounded-[24px] overflow-hidden relative shadow-lg">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    alt="Highway at dusk"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 p-8 sm:p-12 lg:p-16 xl:p-20">

                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-[40px] sm:text-[54px] font-black leading-tight tracking-tight mb-2">
                            Request a Quote
                        </h2>
                        <p className="text-gray-400 font-medium text-[15px] mb-12 tracking-wide">
                            How to get started
                        </p>

                        <h3 className="text-[22px] font-bold mb-6">
                            Contact us to request transportation.
                        </h3>

                        <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed max-w-[480px]">
                            <p>
                                <strong className="text-white">Falcon Translines Ltd.</strong> provides reliable transportation using different types of equipment to accommodate your unique shipment requirements.
                            </p>
                            <p>
                                Our expert dispatch team ensures that freight from any region gets safely delivered across major Canadian corridors without delay.
                            </p>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-[16px] p-8 sm:p-10 shadow-2xl max-w-[550px] ml-auto">
                            <h3 className="text-[20px] font-black text-gray-900 flex items-center gap-2 mb-8 uppercase tracking-tight">
                                <span className="text-primary-600 text-[24px]">★</span> Request Quote
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#f8f9fa] border-none px-5 py-4 rounded-[8px] text-[15px] focus:ring-2 focus:ring-primary-500 transition-shadow outline-none placeholder-gray-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#f8f9fa] border-none px-5 py-4 rounded-[8px] text-[15px] focus:ring-2 focus:ring-primary-500 transition-shadow outline-none placeholder-gray-400"
                                />
                                <input
                                    type="tel"
                                    placeholder="+1 (   )   -    "
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-[#f8f9fa] border-none px-5 py-4 rounded-[8px] text-[15px] focus:ring-2 focus:ring-primary-500 transition-shadow outline-none placeholder-gray-400"
                                />

                                <div className="flex flex-col sm:flex-row gap-6 pt-4 pb-4">
                                    <label className="flex items-start gap-3 flex-1 cursor-pointer">
                                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600" />
                                        <span className="text-[11px] text-gray-500 leading-snug">
                                            I agree to receive email updates, offers, and notifications from Falcon Translines.
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-3 flex-1 cursor-pointer">
                                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600" />
                                        <span className="text-[11px] text-gray-500 leading-snug">
                                            By checking this box, you agree to receive text messages from Falcon Translines. <a href="#" className="text-primary-600 font-bold hover:underline">Read more.</a>
                                        </span>
                                    </label>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                                    <button
                                        type="button"
                                        onClick={handleWhatsAppSubmit}
                                        className="w-full sm:w-auto bg-[#ff6b6b] hover:bg-[#ff4f4f] text-white font-bold py-3.5 px-8 rounded-[8px] transition-colors text-[15px] shadow-sm"
                                    >
                                        Submit Request
                                    </button>

                                    {/* Cloudflare Mock */}
                                    <div className="flex items-center gap-3 border border-gray-200 rounded-[8px] px-3 py-2 bg-[#fcfcfc] flex-shrink-0 w-full sm:w-auto hover:bg-gray-50 transition-colors cursor-pointer">
                                        <div className="w-6 h-6 border-2 border-gray-300 bg-white rounded shadow-inner flex items-center justify-center"></div>
                                        <span className="text-[13px] text-gray-600 font-medium whitespace-nowrap">Verify you are human</span>
                                        <div className="ml-2 flex flex-col items-center">
                                            <span className="text-[20px] font-black text-orange-400 leading-none h-[20px]">☁</span>
                                            <span className="text-[7px] text-gray-500 font-bold mt-1 tracking-wider uppercase">Cloudflare</span>
                                            <div className="flex text-[6px] text-gray-400 gap-1 mt-0.5">
                                                <span className="hover:underline">Privacy</span>•<span className="hover:underline">Terms</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Setup;
