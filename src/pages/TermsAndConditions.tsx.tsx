import React from 'react';
import Navbar from './NavBar';

const TermsAndConditions: React.FC = () => {
    const terms = [
        { title: 'Acceptance of Terms', description: 'By using our Car Registration Portal, you agree to comply with and be bound by these terms and conditions.' },
        { title: 'User Responsibilities', description: 'You must provide accurate, complete, and up-to-date information. Misleading info may lead to account suspension.' },
        { title: 'Privacy & Data', description: 'We keep your data safe and only use it for official processing. Read our Privacy Policy for details.' },
        { title: 'Service Availability', description: 'We aim for 24/7 access but may conduct maintenance or face outages without prior notice.' },
        { title: 'Modifications', description: 'We may update these terms. Continued use means you accept any new changes.' },
        { title: 'Contact Us', description: 'For queries, email us at support@carportal.com.' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600">
                            Terms & Conditions
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            Please read our terms and conditions carefully before using our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
                        {terms.map((term, index) => (
                            <div
                                key={index}
                                className="relative bg-teal-600 text-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                            >
                                <div className="relative z-10 p-6 text-center">
                                    <h2 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                                        {term.title}
                                    </h2>
                                    <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">
                                        {term.description}
                                    </p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                                    style={{ backgroundImage: 'url(/images/terms-bg.jpg)' }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-teal-500 text-xs pt-4 border-t">
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
