import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home: React.FC = () => {
  const features = [
    { title: 'Secure & Reliable', text: 'Your data is protected with modern encryption and multi-layer security protocols.' },
    { title: 'Fast Process', text: 'Complete your registration in minutes with our easy-to-use system.' },
    { title: 'Data Privacy', text: 'We follow strict data privacy regulations to keep your information secure.' },
    { title: 'Comprehensive Verification', text: 'Multi-step verification to prevent unauthorized access.' },
    { title: 'Advanced Encryption', text: 'End-to-end encryption for maximum data protection.' },
    { title: '24/7 Support', text: 'Our dedicated support team is always here to assist you.' }
  ];

  const parkingImages = [
    '/assets/mk.png',
    '/assets/willy.png',
    '/assets/chris.png'
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden relative">
      <Navbar />

      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#7BBBFF] via-[#05OF2A] to-[#7BBBFF] opacity-80"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-12 transform hover:scale-105 transition-all duration-700 ease-in-out">
          {/* <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0084C2] mb-6">
              Welcome to the Car Registration Portal
            </h1>
            <p className="text-[#0084C2] text-lg sm:text-xl mb-6">
              Easily register your vehicle online in just a few steps.
            </p>
            <motion.button
              className="bg-[#0084C2] text-white px-10 py-4 text-lg rounded-2xl shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                backgroundColor: '#1B9BD7',
                boxShadow: '0 15px 40px rgba(0, 132, 194, 0.6)'
              }}
              whileTap={{
                scale: 0.95,
                rotate: -5,
                backgroundColor: '#006B9F',
                boxShadow: '0 5px 20px rgba(0, 132, 194, 0.4)'
              }}
            >
              Start Registration
            </motion.button>
          </div> */}

          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="mt-12">
            {parkingImages.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg  w-full flex items-center justify-center bg-gray-100">
                <img src={src} alt={`Parking Issue ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </Carousel>

          <div className="relative w-full overflow-hidden bg-[#E0F2FB] p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold text-[#0084C2] text-center mb-6">
              What Makes Us Different?
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 md:w-80 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                  whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 132, 194, 0.5)' }}
                  whileTap={{ scale: 0.95, boxShadow: '0 15px 30px rgba(0, 132, 194, 0.4)' }}
                >
                  <h3 className="text-xl font-semibold text-[#0084C2]">{item.title}</h3>
                  <p className="mt-2 text-[#0073AD]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
<Footer/>    </div>
  );
};

export default Home;
