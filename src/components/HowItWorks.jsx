import React from 'react';
import { FaHandshake, FaRoute, FaDollarSign, FaHeadset, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks = () => {
    const headerRef = useScrollAnimation();
    const stepsRef = useScrollAnimation();
    const featuresRef = useScrollAnimation();
    const companiesRef = useScrollAnimation();
    const ctaRef = useScrollAnimation();

    const steps = [
        {
            icon: <FaHandshake className="text-4xl" />,
            title: "Sign Up",
            description: "Join our network of professional truck drivers in minutes. No long-term contracts required.",
            color: "bg-blue-500"
        },
        {
            icon: <FaRoute className="text-4xl" />,
            title: "Get Loads",
            description: "We find the best-paying loads for your route and equipment type, maximizing your earnings.",
            color: "bg-primary-500"
        },
        {
            icon: <FaDollarSign className="text-4xl" />,
            title: "Earn More",
            description: "Focus on driving while we handle paperwork, negotiations, and payment collection.",
            color: "bg-green-500"
        }
    ];

    const features = [
        {
            icon: <FaTruck className="text-2xl" />,
            title: "All Equipment Types",
            description: "Dry van, flatbed, reefer, power only, and more"
        },
        {
            icon: <FaCheckCircle className="text-2xl" />,
            title: "No Hidden Fees",
            description: "Transparent pricing with no surprise charges"
        },
        {
            icon: <FaHeadset className="text-2xl" />,
            title: "24/7 Support",
            description: "Round-the-clock dispatch support when you need it"
        }
    ];

    const companies = [
        "Schneider", "Swift", "JB Hunt", "Werner", "Prime", "CRST",
        "Covenant", "USA Truck", "Heartland", "Marten", "Knight", "Celadon"
    ];

    return (
        <section id="how-it-works" className="section bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16 scroll-fade-in">
                    <h2 className="section-title">
                        How <span className="text-primary-500">OnWay Dispatch</span> Works
                    </h2>
                    <p className="section-subtitle">
                        Get started in 3 simple steps and start earning more with our professional dispatching services
                    </p>
                </div>

                {/* Steps */}
                <div ref={stepsRef} className="grid md:grid-cols-3 gap-8 mb-20 scroll-fade-in scroll-delay-200">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                            </div>

                            {/* Step Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div ref={featuresRef} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16 scroll-scale">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Why Choose OnWay Dispatch?
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We work with hundreds of companies to ensure you get the best loads and highest pay rates
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Partnerships */}
                <div ref={companiesRef} className="text-center scroll-fade-in scroll-delay-300">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">
                        Trusted by Leading Companies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {companies.map((company, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="text-gray-700 font-semibold text-sm">{company}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div ref={ctaRef} className="mt-16 text-center scroll-fade-in scroll-delay-400">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Increase Your Earnings?
                        </h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join hundreds of truck drivers who are already earning more with OnWay Dispatch
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/19433009678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4"
                            >
                                Get Started Today
                            </a>
                            <a
                                href="https://wa.me/19433009678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 