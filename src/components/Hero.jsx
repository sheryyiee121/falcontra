import React, { useState } from 'react';
import { FaStar, FaInfoCircle } from 'react-icons/fa';

const Hero = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(`Hi, I'm requesting a setup quote.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
        window.open(`https://wa.me/15144648797?text=${text}`, '_blank');
    };

    return (
        <div className="relative bg-[#f8fbff] min-h-[92vh] flex items-center overflow-hidden">
            {/* Background Image for Right Side (Desktop) */}
            <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
                <img
                    src="/images/roger-starnes-sr-hu443w5ov5o-unsplash.jpg"
                    alt="Shiny American Peterbilt truck"
                    className="w-full h-full object-cover object-center bg-gray-200"
                />
            </div>

            {/* Gentle Curve SVG separating left and right */}
            <div className="absolute inset-y-0 left-[45%] hidden lg:block w-[15vw] z-10 translate-x-[-1px]">
                <svg className="h-full w-full text-[#f8fbff]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,0 C100,30 100,70 0,100 Z" />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full lg:w-[60%] px-4 sm:px-6 lg:px-12 xl:px-24 py-16 lg:py-24 bg-[#f8fbff] lg:bg-transparent bg-opacity-95 lg:bg-opacity-100">
                <div className="max-w-[700px] ml-auto mr-auto lg:mr-16">
                    <h1 className="text-[44px] sm:text-5xl md:text-6xl lg:text-[72px] font-black text-[#1a1a1a] leading-[1.05] mb-6 tracking-tight">
                        Reliable Canadian <br className="hidden sm:block" />
                        <span className="text-primary-600">freight</span> carrier
                    </h1>

                    <p className="text-lg lg:text-[19px] text-[#4a4a4a] mb-6 font-medium leading-snug">
                        Professional trucking and freight transportation services across Canada. We handle both local and long-distance shipments.
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-3 mb-10">
                        <div className="flex text-[#ff9f00] text-xl gap-1">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span className="text-[13px] text-gray-700 font-bold tracking-wide">Trusted by businesses throughout Canada</span>
                    </div>

                    {/* Form Component Box */}
                    <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 sm:p-8 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-[14px] font-medium placeholder-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-[14px] font-medium placeholder-gray-400"
                            />
                            <input
                                type="tel"
                                placeholder="+1 (   )   -    "
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-[14px] font-medium placeholder-gray-400"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 mb-8">
                            <label className="flex items-start gap-3 flex-1 cursor-pointer group">
                                <input type="checkbox" className="mt-0.5 w-[18px] h-[18px] rounded-md border-gray-300 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                                <span className="text-[10px] text-gray-500 leading-snug group-hover:text-gray-700 transition-colors">
                                    I agree to receive email updates, offers, and notifications from Falcon Translines.
                                </span>
                            </label>
                            <label className="flex items-start gap-3 flex-1 cursor-pointer group">
                                <input type="checkbox" className="mt-0.5 w-[18px] h-[18px] rounded-md border-gray-300 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                                <span className="text-[10px] text-gray-500 leading-snug group-hover:text-gray-700 transition-colors">
                                    By checking this box, you agree to receive text messages from Falcon Translines for <a href="#" className="text-primary-500 font-bold hover:underline">Read more...</a>
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                            <button
                                onClick={handleWhatsAppSubmit}
                                className="w-full sm:w-auto bg-[#ff817d] hover:bg-[#ff6b67] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md hover:shadow-lg text-[15px]"
                            >
                                Request a Quote
                            </button>

                            {/* Fake Cloudflare CAPTCHA mock */}
                            <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-3 bg-[#fafafa] flex-1 sm:max-w-[260px] cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 rounded border-2 border-gray-300 bg-white shadow-inner"></span>
                                <span className="text-[14px] text-gray-700 font-medium">Verify you are human</span>
                                <div className="ml-auto flex flex-col items-center">
                                    <span className="text-[24px] font-black text-orange-500 leading-none h-[24px]">☁</span>
                                    <span className="text-[8px] text-gray-500 font-bold mt-1 tracking-wider">CLOUDFLARE</span>
                                    <div className="flex text-[7px] text-gray-400 gap-1 mt-0.5">
                                        <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Criteria Tags Section */}
                    <div>
                        <h4 className="text-[14px] font-black text-gray-900 mb-5 uppercase tracking-wide">
                            <span className="text-primary-500">KEY</span> criteria of partnering with us:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {['Hot Shot', 'Box Truck', 'Dry Vans', 'Reefers, Flatbeds, Stepdecks', 'OTR Routes For All Equipment'].map((tag, index) => (
                                <div key={index} className="inline-flex items-center gap-2 bg-[#e8f0fe] text-blue-600 font-bold px-4 py-2 bg-opacity-70 rounded-full text-[13px] hover:bg-[#dce6fa] transition-colors cursor-pointer">
                                    {tag} <FaInfoCircle className="text-blue-500 text-[14px]" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;