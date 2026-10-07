import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TruckPage from './pages/TruckPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Lenis from '@studio-freight/lenis';

function App() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle Hash Routing
        const handleHashChange = () => {
            setHash(window.location.hash);
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            lenis.destroy();
        };
    }, []);

    const isTruckPage = hash.startsWith('#truck/');
    const isFaqPage = hash === '#/faq';
    const isContactPage = hash === '#/contact';

    const renderContent = () => {
        if (isTruckPage) return <TruckPage hash={hash} />;
        if (isFaqPage) return <FaqPage />;
        if (isContactPage) return <ContactPage />;
        return <Home />;
    };

    return (
        <div className="min-h-screen bg-gray-50 font-inter relative">
            <Navbar />
            {renderContent()}
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;