import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TruckPage from './pages/TruckPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
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