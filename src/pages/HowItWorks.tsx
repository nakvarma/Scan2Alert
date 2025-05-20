import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';

const steps = [
  {
    title: 'Register Your Vehicle',
    description: 'By scanning the QR code, register your vehicle with your WhatsApp contact.'
  },
  {
    title: 'Someone Scans → You Get Alerted',
    description: 'If someone scans the code, they\'ll be redirected to WhatsApp to send you a pre-filled message like: "Hi, your car is blocking my driveway. Can you please move it?"'
  },
  {
    title: 'Stay Anonymous & Secure',
    description: 'No phone numbers are revealed to the scanner, and your data is protected.'
  }
];

const whyScan2Alert = [
  'Avoid Unnecessary Fights or Towing',
  'Quick Communication via WhatsApp',
  'Privacy First — No phone numbers shown',
  "Peace of Mind When You're Away",
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <Navbar />
      <motion.div
        className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
              How It Works
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2] group-hover:scale-110 transition-transform duration-300">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-2 text-[#0084C2] text-center">Why Scan2Alert?</h2>
            <ul className="list-disc list-inside text-gray-700 max-w-md mx-auto space-y-1">
              {whyScan2Alert.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-2 text-[#0084C2] text-center">WhatsApp Integration</h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              We use WhatsApp’s "Click to Chat" feature to send instant messages. Scanning the QR redirects the user to WhatsApp with a pre-typed message, so it's frictionless.
            </p>
          </div>
          
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
