import React from 'react';
import { FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <FaTruck className="text-3xl text-primary-500" />
                            <span className="text-2xl font-bold">OnWay Dispatch</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Professional truck dispatching services helping American truck drivers maximize their earnings
                            and focus on the road ahead. Your success is our priority.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/19433009678" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-primary-500" />
                                <a href="tel:+19433009678" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    +1 (943) 300-9678
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-primary-500" />
                                <a href="mailto:jeeu7786@gmail.com" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                                    jeeu7786@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-primary-500 mt-1" />
                                <span className="text-gray-300">
                                    123 Trucking Ave<br />
                                    Dallas, TX 75201
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 OnWay Dispatch. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 