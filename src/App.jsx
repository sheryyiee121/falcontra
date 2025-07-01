import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App; 