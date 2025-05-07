
import React from 'react';
import Navbar from './NavBar';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Please read our terms and conditions carefully before using our services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By using our Car Registration Portal, you agree to comply with and be bound by these terms and conditions.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">2. User Responsibilities</h2>
              <p className="mt-2">
                You must provide accurate, complete, and up-to-date information. Misleading info may lead to account suspension.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">3. Privacy & Data</h2>
              <p className="mt-2">
                We keep your data safe and only use it for official processing. Read our Privacy Policy for details.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">4. Service Availability</h2>
              <p className="mt-2">
                We aim for 24/7 access but may conduct maintenance or face outages without prior notice.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">5. Modifications</h2>
              <p className="mt-2">
                We may update these terms. Continued use means you accept any new changes.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600">6. Contact Us</h2>
              <p className="mt-2">
                For queries, email us at <span className="text-indigo-600 font-medium">support@carportal.com</span>.
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

export default TermsAndConditions;
