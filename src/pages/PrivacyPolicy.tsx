import React from 'react';
import Navbar from './NavBar';

const PrivacyPolicy: React.FC = () => {
    const policies = [
        { title: 'Information We Collect', description: 'We collect information such as name, contact details, vehicle documents, and user activity on the portal.' },
        { title: 'How We Use Your Data', description: 'Your data is used solely for the purpose of vehicle registration, user verification, and service communication.' },
        { title: 'Data Security', description: 'We implement industry-standard security protocols to ensure your data remains safe and protected at all times.' },
        { title: 'Sharing of Information', description: 'We do not sell or rent your personal data. It is only shared with government agencies when required by law.' },
        { title: 'Cookies & Tracking', description: 'We use cookies to enhance user experience and track usage patterns. You can disable cookies via your browser.' },
        { title: 'Contact & Complaints', description: 'If you have any concerns regarding your data privacy, please contact us at privacy@carportal.com.' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            Your privacy is important to us. Please read how we collect, use, and protect your information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
                        {policies.map((policy, index) => (
                            <div key={index} className="relative bg-indigo-600 text-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group">
                                <div className="relative z-10 p-6 text-center">
                                    <h2 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                                        {policy.title}
                                    </h2>
                                    <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">
                                        {policy.description}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundImage: 'url(/images/privacy-bg.jpg)' }}></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-gray-500 text-xs pt-4 border-t">
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
