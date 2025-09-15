import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';

const faqs = [
  { question: 'Is my phone number visible to the person scanning my QR code?', answer: "No. We use WhatsApp's Click-to-Chat feature, which allows others to message you without revealing your phone number. Your privacy is always protected." },
  { question: 'Do I need to install any app?', answer: "No. All you need is WhatsApp installed on your phone. There's no need for any additional apps. Both the car owner and the complainer should have whatsapp installed." },
  { question: ': Do I need internet access to scan or receive messages?', answer: "Yes. The person scanning must have an internet connection to open the WhatsApp chat, and you need one to receive messages on WhatsApp." },
  { question: 'Can I customize the message that I send to the car owner?', answer: "No, you can only select one of the predefined messages from the list to let the owner know the issue you are facing." },
  { question: 'Can I use this on multiple vehicles?', answer: "Yes! Upto 3 vehicles can be linked to a whatsapp contact number." },
  { question: 'What if someone misuses the application?', answer: 'When the car owner reports spam twice, the complainant’s contact number will be blocked by the application.' },
  { question: 'What if someone scans the QR and sends messages repeatedly?', answer: 'Once someone scans the QR and contacts the owner, he can contact the owner again only after 15 minutes.' },
  { question: 'Is this service available internationally?', answer: 'No. Right now, this service is available in India only.' },
];

const Faq: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-white overflow-x-hidden">
      <Navbar />

      <motion.div
        className="flex-1 px-4 sm:px-6 md:px-8 py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8">

          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0084C2]">
              Frequently Asked Questions
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Find answers to the most common questions about our service.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 w-[90%] sm:w-4/5 md:w-3/4 mx-auto">
            <img
              src="/assets/faq.jpeg"
              alt="FAQ Hero"
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
            />

            <img
              src="/assets/faq.jpeg"
              alt="FAQ Hero"
              className="relative z-10 w-full h-full object-contain"
            />
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
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2] group-hover:scale-110 transition-transform duration-300">
                  Q: {faq.question}
                </h2>
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
