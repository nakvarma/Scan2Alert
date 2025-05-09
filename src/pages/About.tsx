import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

    const parkingImages = [
        '/assets/car.jpg'
        
    ];

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <Navbar />

            <motion.div
                className="relative w-full bg-gray-100 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-teal-600 py-6">
                    Explore Our Platform
                </h2>
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="mt-4">
                    {parkingImages.map((src, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg h-96 w-3/4 mx-auto flex items-center justify-center bg-gray-100">
                            <img src={src} alt={`Parking Issue ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </Carousel>
            </motion.div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700">
                            About Our Car Registration Portal
                        </h1>
                        <p className="mt-2 text-teal-600 text-sm sm:text-base">
                            Simplifying the car registration process through technology.
                        </p>
                    </div>

                    <div className="relative w-full bg-teal-50 p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold text-teal-600 text-center">Our Key Features</h2>
                        <div className="relative mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {carouselItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative bg-teal-600 text-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="relative z-10 p-6 text-center">
                                        <h3 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">{item.title}</h3>
                                        <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center text-teal-500 text-xs pt-4 border-t">
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
