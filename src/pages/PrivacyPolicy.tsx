import React from 'react';
import Navbar from './NavBar';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
              Privacy Policy
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Your privacy is important to us. Please read how we collect, use, and protect your information.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">1. Information We Collect</h2>
              <p className="mt-2">
                We collect information such as name, contact details, vehicle documents, and user activity on the portal.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">2. How We Use Your Data</h2>
              <p className="mt-2">
                Your data is used solely for the purpose of vehicle registration, user verification, and service communication.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">3. Data Security</h2>
              <p className="mt-2">
                We implement industry-standard security protocols to ensure your data remains safe and protected at all times.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">4. Sharing of Information</h2>
              <p className="mt-2">
                We do not sell or rent your personal data. It is only shared with government agencies when required by law.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">5. Cookies & Tracking</h2>
              <p className="mt-2">
                We use cookies to enhance user experience and track usage patterns. You can disable cookies via your browser.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">6. Contact & Complaints</h2>
              <p className="mt-2">
                If you have any concerns regarding your data privacy, please contact us at <span className="text-indigo-600 font-medium">privacy@carportal.com</span>.
              </p>
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

export default PrivacyPolicy;
