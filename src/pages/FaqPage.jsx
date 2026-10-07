import React from 'react';
import FAQ from '../components/FAQ';
import Setup from '../components/Setup';

const FaqPage = () => {
    return (
        <div className="w-full">
            {/* Minimal Header Spacer for aesthetics */}
            <div className="bg-gray-50 pt-20"></div>
            <FAQ />
            <Setup />
        </div>
    );
};

export default FaqPage;
