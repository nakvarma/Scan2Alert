import React, { useState } from 'react';
import Navbar from './NavBar';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import { FaAddressBook, FaEnvelope, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaVoicemail } from 'react-icons/fa';

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
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
            <div className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2]">Address</h2>
                {/* <FaMapMarkerAlt className="mr-2" /> <p className="text-gray-700">
                    01, 1st Floor, 8-3-833/167, Phase 2, Kamalapuri Colony, Sri Nagar Colony, Hyderabad, Telangana, 500073
                </p> */}
                <div className="flex items-start space-x-2">
  <FaMapMarkerAlt className="mt-1 text-5xl text-[#0084C2]" />
  <p className="text-gray-700">
    101, 1st Floor, 8-3-833/167, Phase 2, Kamalapuri Colony, Sri Nagar Colony, Hyderabad, Telangana, 500073
  </p>
</div>

            </div>
            <div className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2]">Phone </h2>
                <div className="flex items-start space-x-2">
  <FaPhoneAlt className="mt-1 text-[#0084C2]" />
  <a href="tel:+919393088000" className="text-gray-700 hover:text-blue-600">
    +91 93930 88000
  </a>
</div>

            </div>
             <div className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
                <h2 className="text-lg font-semibold mb-2 text-[#0084C2]">Email</h2>
              <div className="flex items-start space-x-2">
  <FaEnvelope className="mt-1 text-[#0084C2]" />
  <a href="mailto:info@scan2alert.in" className="text-gray-700 hover:text-blue-600">
    info@scan2alert.in
  </a>
  
</div>
<div className="flex items-start space-x-2">
  <FaEnvelope className="mt-1 text-[#0084C2]" />
  <a href="mailto:nvsraju.itp@gmail.com" className="text-gray-700 hover:text-blue-600">
    nvsraju.itp@gmail.com
  </a>
  
</div>

          </div> 
           {/* <div className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
                <a
          href="https://www.google.com/maps/place/VKC+PROJECTS/@17.4301183,78.4301038,21z/data=!4m6!3m5!1s0x3bcb91a54d4aceaf:0xee5fb12b5b7a1ee5!8m2!3d17.4300928!4d78.4302636!16s%2Fg%2F11h5s2v2ng?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <FaMapMarkerAlt className="mr-2" />
          View on Map
        </a>
        <h1>google Map</h1>
            </div>
          </div> */}

                </div>
               {/* <div className="bg-[#E0F2FB] rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
  

  <div className="w-full h-[300px] rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2691577492946!2d78.4301038!3d17.4301183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a54d4aceaf%3A0xee5fb12b5b7a1ee5!2sVKC%20PROJECTS!5e0!3m2!1sen!2sin!4v1717493200000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div> */}

          </div>
            </div> 
            <div className='flex justify-center items-center flex-col space-y-4 p-6'>
                
   {/* <div className="p-4 max-w-md space-y-4"> */}
      {/* Address */}
     
    {/* </div> */}
      

{/* <h1 className=' cursor-pointer '>
<link rel="stylesheet" href="https://www.google.com/maps/place/VKC+PROJECTS/@17.4301183,78.4301038,21z/data=!4m6!3m5!1s0x3bcb91a54d4aceaf:0xee5fb12b5b7a1ee5!8m2!3d17.4300928!4d78.4302636!16s%2Fg%2F11h5s2v2ng?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"/>
google Map</h1> */}
            </div>
            <Footer/>
        </div>
    );
};

export default ContactUs;
