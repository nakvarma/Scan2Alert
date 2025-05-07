import React from 'react';
import Navbar from './NavBar';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
                            About Our Car Registration Portal
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            Simplifying the car registration process through technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-indigo-500">Our Mission</h2>
                            <p className="mt-2 text-gray-700">
                                To streamline vehicle registration with a fast, reliable, and user-friendly digital platform that ensures a smooth experience for users.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-indigo-500">Our Vision</h2>
                            <p className="mt-2 text-gray-700">
                                To become the leading digital portal for vehicle registration services by reducing paperwork, wait times, and hassle.
                            </p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold text-indigo-500 text-center">
                            Why Choose Us?
                        </h2>
                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base list-disc list-inside">
                            <li>Instant registration processing</li>
                            <li>User-friendly dashboard</li>
                            <li>Secure document uploads</li>
                            <li>Real-time status tracking</li>
                            <li>24/7 customer support</li>
                            <li>Govt-approved compliance</li>
                        </ul>
                    </div>

                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 text-center">
                            What Our Users Are Saying
                        </h2>
                        <div className="mt-4 space-y-4 text-sm sm:text-base">
                            <div className="text-gray-600">
                                <p className="font-semibold">John D.</p>
                                <p>"The registration process was quick and easy! I didn't have to deal with long lines at the office, and the website was really intuitive."</p>
                            </div>
                            <div className="text-gray-600">
                                <p className="font-semibold">Sarah M.</p>
                                <p>"I love the dashboard. I can manage all my vehicles in one place, and I can track the status of my registration anytime!"</p>
                            </div>
                            <div className="text-gray-600">
                                <p className="font-semibold">David R.</p>
                                <p>"Great customer service! I had a question about my registration, and they answered me immediately."</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-indigo-500 text-center">
                            How It Works
                        </h2>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 1: Create an Account</h3>
                                <p className="text-gray-600">Sign up for a free account to get started with the registration process.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 2: Upload Documents</h3>
                                <p className="text-gray-600">Upload all necessary documents such as ID, proof of ownership, and insurance.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 3: Complete Registration</h3>
                                <p className="text-gray-600">Complete the registration process and submit your application for processing.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 4: Get Your Registration</h3>
                                <p className="text-gray-600">Once approved, you'll receive your registration details and documents in no time.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 5: Manage Your Vehicles</h3>
                                <p className="text-gray-600">Access your dashboard to manage registered vehicles and renewal reminders easily.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md text-center">
                                <h3 className="text-indigo-600 font-semibold">Step 6: Get Support Anytime</h3>
                                <p className="text-gray-600">Need help? Reach out to our 24/7 support team through live chat or email.</p>
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

export default About;
