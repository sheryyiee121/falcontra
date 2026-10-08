import React, { useState } from 'react';
import { FiChevronDown, FiMenu, FiX, FiCheckSquare } from 'react-icons/fi';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileTrucksOpen, setIsMobileTrucksOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center mr-8">
                        <a href="/" className="flex items-center gap-2">
                            <span className="bg-primary-600 text-white px-2 py-0.5 rounded-sm text-[28px] font-black tracking-tight uppercase leading-none">
                                FALCON
                            </span>
                            <span className="text-[14px] font-extrabold text-gray-900 leading-tight">
                                Translines<br />Ltd
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a href="/#services" className="flex items-center text-gray-900 font-medium hover:text-primary-500 transition-colors text-[15px]">
                            Services <FiChevronDown className="ml-1 text-gray-500 w-4 h-4" />
                        </a>
                        <div className="relative group/trucks py-6">
                            <a href="/#fleet" className="flex items-center text-gray-900 font-bold hover:text-primary-500 transition-colors text-[16px] cursor-pointer">
                                Trucks <FiChevronDown className="ml-1 text-gray-500 w-4 h-4" />
                            </a>

                            {/* Dropdown Menu */}
                            <div className="absolute top-[80px] left-0 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover/trucks:opacity-100 group-hover/trucks:visible transition-all duration-300 w-[340px] px-2 py-4 rounded-b-lg border-t-2 border-red-500">
                                <a href="#truck/box-truck" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">26ft Box Truck Services</span>
                                </a>
                                <a href="#truck/dry-van" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">Dry Van Services</span>
                                </a>
                                <a href="#truck/step-deck" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">Step Deck Services</span>
                                </a>
                                <a href="#truck/reefer" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">Reefer Services</span>
                                </a>
                                <a href="#truck/flatbed" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">Flatbed Services</span>
                                </a>
                                <a href="#truck/hotshot" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500">Hotshot Service</span>
                                </a>
                                <a href="#truck/conestoga" className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors group/link cursor-pointer">
                                    <div className="w-1.5 h-1.5 bg-red-600 outline outline-2 outline-offset-1 outline-red-600/30"></div>
                                    <span className="text-gray-900 font-semibold text-[15px] group-hover/link:text-red-500 flex-1 leading-snug">Conestoga Trailer Services</span>
                                </a>
                            </div>
                        </div>
                        <a href="/#" className="bg-[#ff817d] hover:bg-[#ff6b67] text-white font-bold px-5 py-2 transition-colors text-[15px]">
                            Owner-operators
                        </a>
                        <a href="#/faq" className="text-gray-900 font-medium hover:text-primary-500 transition-colors text-[15px]">
                            FAQ
                        </a>
                        <a href="/#about" className="flex items-center text-gray-900 font-medium hover:text-primary-500 transition-colors text-[15px]">
                            Company <FiChevronDown className="ml-1 text-gray-500 w-4 h-4" />
                        </a>
                        <a href="#/contact" className="text-gray-900 font-medium hover:text-primary-500 transition-colors text-[15px] pr-2">
                            Contact us
                        </a>
                    </div>

                    {/* Phone Button */}
                    <div className="hidden lg:flex items-center">
                        <a href="https://wa.me/15144648797" target="_blank" rel="noopener noreferrer" className="bg-primary-500 text-white font-bold px-6 py-3.5 hover:bg-primary-600 transition-colors text-[15px]">
                            +1 (514) 464-8797
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-900 hover:text-primary-500 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100 max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-4 pb-6 space-y-5">
                        <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium">
                            Services
                        </a>

                        {/* Mobile Trucks Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsMobileTrucksOpen(!isMobileTrucksOpen)}
                                className="w-full flex items-center justify-between text-gray-900 font-medium"
                            >
                                Trucks <FiChevronDown className={`text-gray-500 transition-transform ${isMobileTrucksOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isMobileTrucksOpen && (
                                <div className="pl-4 space-y-4 mt-4 border-l-2 border-red-100">
                                    <a href="#truck/box-truck" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">26ft Box Truck Services</a>
                                    <a href="#truck/dry-van" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Dry Van Services</a>
                                    <a href="#truck/step-deck" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Step Deck Services</a>
                                    <a href="#truck/reefer" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Reefer Services</a>
                                    <a href="#truck/flatbed" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Flatbed Services</a>
                                    <a href="#truck/hotshot" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Hotshot Service</a>
                                    <a href="#truck/conestoga" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-[14px] font-medium hover:text-red-500">Conestoga Trailer Services</a>
                                </div>
                            )}
                        </div>

                        <a href="#owner-operators" onClick={() => setIsMobileMenuOpen(false)} className="block text-primary-500 font-semibold">
                            Owner-operators
                        </a>
                        <a href="#/faq" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-900 font-medium">
                            FAQ
                        </a>
                        <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium">
                            Company
                        </a>
                        <a href="#/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-900 font-medium">
                            Contact us
                        </a>
                        <a href="https://wa.me/15144648797" target="_blank" rel="noopener noreferrer" className="block mt-6 bg-primary-500 text-white font-bold text-center py-3.5 rounded-lg active:scale-95 transition-transform">
                            +1 (514) 464-8797
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;