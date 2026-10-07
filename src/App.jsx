import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantage from './components/Advantage';
import About from './components/About';
import Setup from './components/Setup';
import FAQ from './components/FAQ';
import Fleet from './components/Fleet';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Navbar />
            <Hero />
            <Services />
            <Advantage />
            <Fleet />
            <About />
            <Setup />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;