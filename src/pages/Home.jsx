import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Advantage from '../components/Advantage';
import About from '../components/About';
import Setup from '../components/Setup';
import FAQ from '../components/FAQ';
import Fleet from '../components/Fleet';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Services />
            <Advantage />
            <Fleet />
            <About />
            <Setup />
            <FAQ />
        </div>
    );
};

export default Home;
