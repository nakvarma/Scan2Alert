import React from 'react';
import Navbar from './NavBar';

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

    const scrollCarousel = (direction: 'left' | 'right') => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">

            <div className="shrink-0">
                <Navbar />
            </div>




            <div className="mt-4 mx-4 sm:mx-6 md:mx-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 px-8 text-center shadow-lg rounded-lg overflow-hidden relative animate-gradient-move">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg animate-fade-in-up">
                    Welcome to the Future of Car Registration
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
                    Simplify your vehicle registration experience with our fast, secure, and user-friendly platform.
                </p>
            </div>





            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">

                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">
                            About Our Car Registration Portal
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            Simplifying the car registration process through technology.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
                        <div className="transition-colors duration-300 hover:bg-indigo-50 p-4 rounded-lg shadow-md">
                            <h2 className="text-lg sm:text-xl font-semibold text-indigo-500">Our Mission</h2>
                            <p className="mt-2 text-gray-700">
                                To streamline vehicle registration with a fast, reliable, and user-friendly digital platform that ensures a smooth experience for users.
                            </p>
                        </div>
                        <div className="transition-colors duration-300 hover:bg-indigo-50 p-4 rounded-lg shadow-md">
                            <h2 className="text-lg sm:text-xl font-semibold text-indigo-500">Our Vision</h2>
                            <p className="mt-2 text-gray-700">
                                To become the leading digital portal for vehicle registration services by reducing paperwork, wait times, and hassle.
                            </p>
                        </div>
                    </div>


                    <div className="relative w-full bg-indigo-50 p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold text-indigo-500 text-center">Our Key Features</h2>
                        <div className="relative mt-4">
                            <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-3 py-2 rounded-full shadow-md z-10">◀</button>
                            <div id="carousel" className="flex overflow-x-scroll scrollbar-hide space-x-4 pl-12 pr-12">
                                {carouselItems.map((item, index) => (
                                    <div key={index} className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-72 transition-transform duration-300 transform hover:scale-105">
                                        <h3 className="text-indigo-600 font-semibold">{item.title}</h3>
                                        <p className="text-gray-700 mt-2">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => scrollCarousel('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-3 py-2 rounded-full shadow-md z-10">▶</button>
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

export default About;
