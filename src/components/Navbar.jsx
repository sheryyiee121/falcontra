import React, { useState, useEffect } from 'react';
import { FaTruck, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <FaTruck className="text-2xl text-primary-500" />
                        <span className="text-xl font-bold text-gray-800">OnWay Dispatch</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            onClick={() => scrollToSection('home')}
                            className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#how-it-works"
                            onClick={() => scrollToSection('how-it-works')}
                            className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                        >
                            How It Works
                        </a>
                        <a
                            href="#contact"
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                        >
                            Contact
                        </a>
                        <a
                            href="https://wa.me/19433009678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#home"
                                onClick={() => scrollToSection('home')}
                                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#how-it-works"
                                onClick={() => scrollToSection('how-it-works')}
                                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                            >
                                How It Works
                            </a>
                            <a
                                href="#contact"
                                onClick={() => scrollToSection('contact')}
                                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                            >
                                Contact
                            </a>
                            <div className="px-3 py-2">
                                <a
                                    href="https://wa.me/19433009678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 