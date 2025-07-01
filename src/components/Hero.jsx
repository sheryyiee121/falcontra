import React from 'react';
import { FaTruck, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const heroRef = useScrollAnimation();
    const contentRef = useScrollAnimation();
    const imageRef = useScrollAnimation();
    const statsRef = useScrollAnimation();

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div ref={contentRef} className="space-y-8 scroll-fade-in">
                        <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                            <FaTruck className="mr-2" />
                            Professional Truck Dispatching
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Maximize Your{' '}
                            <span className="text-primary-500">Trucking</span>{' '}
                            Profits
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl">
                            Professional dispatching services that help American truck drivers increase their earnings,
                            reduce stress, and focus on what matters most - the road ahead.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/19433009678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-lg px-8 py-4"
                            >
                                Start Earning More
                                <FaArrowRight className="ml-2" />
                            </a>
                            <a
                                href="https://wa.me/19433009678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline text-lg px-8 py-4"
                            >
                                <FaPlay className="mr-2" />
                                Watch How It Works
                            </a>
                        </div>

                        <div ref={statsRef} className="flex items-center space-x-8 pt-8 scroll-fade-in scroll-delay-300">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-500">500+</div>
                                <div className="text-gray-600">Happy Drivers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-500">$2M+</div>
                                <div className="text-gray-600">Revenue Generated</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-500">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Truck Image */}
                    <div ref={imageRef} className="relative scroll-slide-right">
                        <div className="relative">
                            {/* Main Truck Image */}
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 shadow-2xl">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                                            <FaTruck className="text-6xl text-primary-500" />
                                        </div>
                                        <div className="mt-6 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Current Load:</span>
                                                <span className="font-semibold text-gray-800">Electronics</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Route:</span>
                                                <span className="font-semibold text-gray-800">LA → NYC</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Earnings:</span>
                                                <span className="font-bold text-primary-500">$3,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Active</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-500">98%</div>
                                    <div className="text-xs text-gray-600">On-Time Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 