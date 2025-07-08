import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';

const About: React.FC = () => {
  const carouselItems = [
    {
      title: 'Instant Registration',
      description: 'No more long queues, get your vehicle registered in minutes.',
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor the status of your application from anywhere.',
    },
    {
      title: 'Secure Document Management',
      description: 'Upload and store documents securely with encrypted storage.',
    },
    {
      title: '24/7 Support',
      description: 'We are here to assist you anytime, anywhere.',
    },
  ];

  const parkingImages = ['/assets/car.jpg'];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <Navbar />

      <motion.div
        className="relative w-full bg-gray-100 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold py-6" style={{ color: '#0084C2' }}>
          Explore Our Platform
        </h2>
        {parkingImages.map((src, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg h-96 w-3/4 mx-auto flex items-center justify-center bg-gray-100"
          >
            <img src={src} alt={`Parking Issue ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </motion.div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
              About Scan2Alert
            </h1>
            <p className="mt-2 text-sm sm:text-base" style={{ color: '#0084C2' }}>
              Park In Peace
            </p>
            <div className="mt-6 mb-4 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col items-center bg-gradient-to-br from-[#E0F2FB] to-[#B3E0FF] border-l-8 border-[#0084C2] rounded-xl p-6 shadow-lg"
              >
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0084C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-[#0084C2]">About the App</h2>
                <p className="mb-2 text-gray-700 text-base sm:text-lg text-center">Scan2Alert is a <span className="font-semibold text-[#0084C2]">community-powered platform</span> that enables drivers to quickly notify vehicle owners of any inconvenience—whether it's a blocked driveway, misplaced parking, or a safety concern—by simply scanning a QR code. The alert is sent directly via WhatsApp, allowing issues to be resolved instantly, respectfully, and without involving enforcement.<br />It's fast, private, and entirely driven by individuals who care about responsible urban living.</p>
                <p className="italic mb-2 text-[#0084C2] text-center">A Community That Resolves, Not Complains.</p>
                <p className="font-semibold mb-2 text-center text-[#0084C2]">Scan to Alert. Parked Wrong? Connect Instantly.</p>
                <p className="text-center text-gray-700">Scan2Alert makes it easy to notify vehicle owners when their cars are blocking driveways, exits, or parked improperly — all through a simple QR code and WhatsApp.</p>
              </motion.div>
            </div>
          </div>
</div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
