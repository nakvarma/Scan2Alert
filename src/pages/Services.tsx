import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Services: React.FC = () => {
  const services = [
    { title: 'New Vehicle Registration', description: 'Get your brand-new vehicle officially registered without the need for long queues or paperwork.' },
    { title: 'Renewal of Registration', description: 'Easily renew your vehicle registration online before it expires.' },
    { title: 'Ownership Transfer', description: 'Seamlessly transfer ownership of your vehicle with proper digital documentation.' },
    { title: 'Duplicate Registration Certificate', description: 'Apply for a duplicate RC in case of loss, damage, or theft.' },
    { title: 'Address Change', description: "Update your registration details if you've moved to a new location." },
    { title: 'NOC Application', description: 'Get a No Objection Certificate for inter-state vehicle registration transfer.' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
              Our Services
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Explore the range of services we offer to simplify your vehicle registration journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative text-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                style={{ backgroundColor: '#0084C2' }}
              >
                <div className="relative z-10 p-6 text-center">
                  <h2 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundImage: 'url(/images/service-bg.jpg)' }}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs pt-4 border-t" style={{ color: '#0084C2' }}>
            &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
