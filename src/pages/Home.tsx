import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
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
        '/assets/mk.jpg',
        '/assets/willy.jpg',
        '/assets/chris.jpg'
    ];

    return (
        <div className="min-h-screen flex flex-col font-serif overflow-x-hidden relative">
            <Navbar />

            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 opacity-80"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
                className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-12 transform hover:scale-105 transition-all duration-700 ease-in-out"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="text-center">
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-700 mb-6"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Welcome to the Car Registration Portal
                        </motion.h1>
                        <motion.p
                            className="text-gray-600 text-lg sm:text-xl mb-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Easily register your vehicle online in just a few steps.
                        </motion.p>
                        <motion.button
                            className="bg-indigo-600 text-white px-10 py-4 text-lg rounded-2xl shadow-md transition-all duration-500 hover:bg-indigo-700 hover:scale-110 hover:shadow-xl"
                            whileHover={{ scale: 1.1, rotate: 5, backgroundColor: '#4338CA', boxShadow: '0 15px 40px rgba(67, 56, 202, 0.6)' }}
                            whileTap={{ scale: 0.95, rotate: -5, backgroundColor: '#3730A3', boxShadow: '0 5px 20px rgba(67, 56, 202, 0.4)' }}
                        >
                            Start Registration
                        </motion.button>
                    </div>

                    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="mt-12">
                        {parkingImages.map((src, index) => (
                            <div key={index} className="rounded-2xl overflow-hidden shadow-lg h-64 w-full flex items-center justify-center bg-gray-100">
                                <img src={src} alt={`Parking Issue ${index + 1}`} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </Carousel>

                    <div className="relative w-full overflow-hidden bg-indigo-50 p-8 rounded-2xl shadow-xl">
                        <motion.h2
                            className="text-2xl font-semibold text-indigo-500 text-center mb-6"
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            What Makes Us Different?
                        </motion.h2>

                        <div className="flex flex-wrap gap-8 justify-center">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-full sm:w-72 md:w-80 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(67, 56, 202, 0.5)' }}
                                >
                                    <h3 className="text-xl font-semibold text-indigo-600">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center text-gray-500 text-xs pt-4 border-t">
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
