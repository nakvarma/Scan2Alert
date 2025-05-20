import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';

const faqs = [
  {
    question: 'Is my phone number visible to others?',
    answer: 'No, your number remains private.'
  },
  {
    question: 'Do I need WhatsApp installed?',
    answer: 'Yes, both the vehicle owner and the reporter should have WhatsApp.'
  },
  {
    question: 'Is my phone number visible to the person scanning my QR code?',
    answer: "No. We use WhatsApp's Click-to-Chat feature, which allows others to message you without revealing your phone number. Your privacy is always protected."
  },
  {
    question: 'What happens when someone scans the QR code?',
    answer: "They'll be redirected to WhatsApp with a pre-filled message like: 'Hi, your vehicle is parked in a way that's causing an issue. Could you please move it?' They can send the message directly — no need to know your number or app download required."
  },
  {
    question: 'Do I need to install any app?',
    answer: "No. All you need is WhatsApp installed on your phone. There's no need for any additional apps."
  },
  {
    question: 'Can I customize the message that people send me?',
    answer: 'No.'
  },
  {
    question: 'What if someone misuses the QR code?',
    answer: 'Each scan initiates a real-time WhatsApp chat. We also log scan activity to detect abuse and can blacklist misused QR codes.'
  },
  {
    question: 'Do I need internet access to scan or receive messages?',
    answer: 'Yes. The person scanning must have an internet connection to open the WhatsApp chat, and you need one to receive messages on WhatsApp.'
  },
  {
    question: 'Can I use this on multiple vehicles?',
    answer: 'Yes! Total 3 vehicles can be linked to a whatsapp contact number.'
  },
  {
    question: 'Can I add more than one contact for a vehicle?',
    answer: "Currently, we support one contact per QR code. If you'd like to assign a backup contact (e.g., family member or driver), that's a feature coming soon in our roadmap."
  },
  {
    question: 'Is this service available internationally?',
    answer: 'No. Right now this service is available in India only.'
  }
];

const Faq: React.FC = () => {
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
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Find answers to the most common questions about our service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2] group-hover:scale-110 transition-transform duration-300">Q: {faq.question}</h2>
                <p className="text-gray-700">A: {faq.answer}</p>
              </motion.div>
            ))}
          </div>
         
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Faq;