import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/15144648797"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce cursor-pointer group"
        >
            <FaWhatsapp className="text-[32px] group-hover:animate-pulse" />
        </a>
    );
};

export default FloatingWhatsApp;
