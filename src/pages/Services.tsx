import React from 'react';
import Navbar from './NavBar';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
              Our Services
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Explore the range of services we offer to simplify your vehicle registration journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">New Vehicle Registration</h2>
              <p className="mt-2 text-gray-700">
                Get your brand-new vehicle officially registered without the need for long queues or paperwork.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">Renewal of Registration</h2>
              <p className="mt-2 text-gray-700">
                Easily renew your vehicle registration online before it expires.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">Ownership Transfer</h2>
              <p className="mt-2 text-gray-700">
                Seamlessly transfer ownership of your vehicle with proper digital documentation.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">Duplicate Registration Certificate</h2>
              <p className="mt-2 text-gray-700">
                Apply for a duplicate RC in case of loss, damage, or theft.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">Address Change</h2>
              <p className="mt-2 text-gray-700">
                Update your registration details if you've moved to a new location.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-indigo-600">NOC Application</h2>
              <p className="mt-2 text-gray-700">
                Get a No Objection Certificate for inter-state vehicle registration transfer.
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

export default Services;
