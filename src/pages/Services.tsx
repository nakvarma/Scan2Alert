import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Vehicle Registration',
      heading: 'Easily register your vehicle online. Create an account and link your vehicle to your WhatsApp number',
      description: (
        <>
         <span className='mb-8'>features:</span>
        <ul  className='list-disc pl-6 text-sm '>
         
          <li><strong>Quick registration</strong></li>
          <li><strong>WhatsApp number integration</strong></li>
          <li><strong>Edit or delete vehicles anytime</strong></li>
        </ul>
        </>
      ),
    },
    {
      title: 'Standard QR Code Generation',
      heading: 'Receive a ready-to-use QR code for each vehicle.',
      description: 'Each registered vehicle gets a standard QR code that you can place on your car rightaway. When scanned, it opens WhatsApp with a pre-filled message to contact you. Compatible with any QR scanner',
    },
    {
      title: 'WhatsApp Integration',
      heading: 'No app downloads, no complications.Scan2Alert uses WhatsApp’s “Click to Chat” feature to connect car owners. The scanner just opens WhatsApp with a message — no one sees your phone number.',
      description: (
        <>
        <h1>Highlights:</h1>
        <ul className='list-disc pl-6 text-sm sm:text-base '>
  <li><strong>Works Indiawide</strong></li>
  <li><strong>Pre-written message format</strong></li>
  <li><strong>Seamless and private</strong></li>
</ul>
        </>
      ),
    },
    {
      title: 'Security & Abuse Protection',
      heading: 'Your privacy is our priority.',
      description: (
        <>
        <p>
          All communication is handled through WhatsApp. We do not expose any personal data or phone
numbers.
        </p>
        <h1 className=' font-normal'>Security Features:</h1>
       
        

          <ul className='list-disc pl-6 text-sm sm:text-base '>
            <li><strong>Number privacy</strong></li>
            <li>
              Misuse tracking and reporting
            </li>
        
          </ul>
         
        </>
      ),
    },
    {
      title: 'Support Services',
      heading: 'Need help? We’ve got your back.Whether you’re setting up for the first time or troubleshooting a scan issue, our support team is here to assist. ',
      description: (
        <>
        <h1>Support Options:
</h1>
        <ul className='list-disc pl-6 text-sm sm:text-base '>
          <li><strong>Email support (Free users)
</strong></li>
          <li><strong>FAQs </strong></li>
        
          </ul>
        </>
      ),
    },
  
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
              Our Services
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
             Scan2Alert provides a fast, secure, and app-free way to communicate with vehicle owners using
WhatsApp and a standard QR code system
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative text-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                style={{ backgroundColor: '#0084C2' }}
              >
                <div className="relative z-10 p-6 ">
                  <h2 className="text-sm  group-hover:scale-110 transition-transform duration-300">
                    {service.title}
                  </h2>
                   <p className="mt-2 text-sm whitespace-normal group-hover:opacity-75 transition-opacity duration-300">
                    {service.heading}
                  </p>
                  <p className="mt-2 text-sm group-hover:opacity-75 duration-300">
                    {service.description}
                  </p>
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundImage: 'url(/images/service-bg.jpg)' }}
                ></div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
