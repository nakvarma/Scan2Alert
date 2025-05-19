import React, { useState } from 'react';
import Navbar from './NavBar';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        emailjs
            .send(
                'service_20virng',
                'template_k42xkd5',
                formData,
                'qpaAH0Ge0nZehIUQ7'
            )
            .then(
                () => {
                    setSuccessMessage('Thank you for contacting us. We will get back to you shortly.');
                    setFormData({ name: '', email: '', message: '' });
                },
                () => {
                    setErrorMessage('An error occurred. Please try again later.');
                }
            )
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
                            Contact Us
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            We're here to assist you. Fill out the form below or reach out to us via email.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold" htmlFor="name" style={{ color: '#0084C2' }}>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 transition-transform duration-300 transform hover:scale-105"
                                style={{ borderColor: '#0084C2', outlineColor: '#0084C2' }}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold" htmlFor="email" style={{ color: '#0084C2' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 transition-transform duration-300 transform hover:scale-105"
                                style={{ borderColor: '#0084C2', outlineColor: '#0084C2' }}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold" htmlFor="message" style={{ color: '#0084C2' }}>
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 transition-transform duration-300 transform hover:scale-105"
                                style={{ borderColor: '#0084C2', outlineColor: '#0084C2' }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-4 w-full py-2 px-4 rounded-xl text-white transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ backgroundColor: '#0084C2' }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>
                    </form>

                    {successMessage && (
                        <div className="text-green-600 text-center font-medium">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="text-red-600 text-center font-medium">{errorMessage}</div>
                    )}

                    <div className="text-center text-xs pt-4 border-t" style={{ color: '#0084C2' }}>
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
