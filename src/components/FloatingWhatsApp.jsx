import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/19433009678"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-2xl" />
        </a>
    );
};

export default FloatingWhatsApp; 