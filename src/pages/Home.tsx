import React from 'react';
import Navbar from './NavBar';


const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
              <Navbar/>
            </div>

            <div className="flex-1 overflow-y-auto px-4  sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8 flex flex-col space-y-10">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 mb-4">
                            Welcome to the Car Registration Portal
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-lg mb-2">
                            Easily register your vehicle online in just a few steps.
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-3 text-lg rounded-xl hover:bg-indigo-700 transition-all shadow-md">
                            Start Registration
                        </button>
                    </div>

                  <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold text-indigo-500 text-center mb-4">
                            What Makes Us Different?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-sm sm:text-base">
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Secure & Reliable</h3>
                                <p>Your data is protected with modern encryption and multi-layer security protocols to ensure complete privacy.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Fast Process</h3>
                                <p>Complete your registration in minutes with our easy-to-use system, reducing wait times and paperwork.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Data Privacy</h3>
                                <p>We follow strict data privacy regulations, ensuring your personal information is always secure.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Comprehensive Verification</h3>
                                <p>Our platform supports multi-step verification to prevent unauthorized access and ensure accurate data.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Advanced Encryption</h3>
                                <p>All communications are encrypted end-to-end for maximum data protection and confidentiality.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">24/7 Support</h3>
                                <p>Our dedicated support team is available around the clock to assist you with any concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-gray-500 text-xs pt-4 border-t">
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
