import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0084C2] border-t text-xs sm:text-sm text-center text-gray-600 py-4 shadow-inner mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                    <Link
                        to="/"
                        className="text-white hover:underline hover:text-blue-100 transition duration-200"
                    >
                        Copyright © 2025 Scan2Alert.in
                    </Link>

                    <div className="flex space-x-4">
                        <Link
                            to="/terms"
                            className="text-white hover:underline hover:text-blue-100 transition duration-200"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-white hover:underline hover:text-blue-100 transition duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
