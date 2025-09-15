import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-50 overflow-x-hidden">
      <Navbar />

      <motion.div
        className="relative w-full bg-gray-50 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold py-6 sm:py-8"
          style={{ color: '#0084C2' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
        </motion.h2>

        <div className="w-[92%] sm:w-4/5 md:w-3/4 mx-auto text-center space-y-6 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/about.jpeg"
              alt="About Scan2Alert"
              className="w-full max-h-[400px] sm:max-h-[500px] object-contain bg-white"
            />
          </motion.div>

          <motion.p
            className="font-semibold text-[#0084C2]  italic sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We envision a future where all responsible citizens will use this platform to resolve any
            issue others face because of their vehicle.
            It works through{" "}
            <span className="font-semibold text-[#0084C2]">WHATSAPP</span> and it's completely FREE.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center w-[92%] sm:w-4/5 md:w-3/4 mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='order-2 md:order-1 bg-[#E0F2FB] rounded-2xl p-3'

          >
            <p
              className="
      text-gray-700 
      text-sm sm:text-base md:text-lg   /* font-size responsive */
      leading-relaxed 
      px-3 sm:px-0 
      text-center md:text-left          /* center on mobile, left on desktop */
    "  >

              {`Scan2Alert is conceived so that anyone facing an 
issue regarding a vehicle be it wrongly parked or
blocking the driveway, can contact the owner
directly and inform him/her about the
inconvenience`}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <img
              src="/assets/scan.png"
              alt="Privacy"
              className="
    rounded-2xl shadow-md 
    w-[60%] sm:w-[70%] md:w-[75%]   /* mobile = 60%, tablet = 70%, desktop = 75% */
    max-h-[180px] sm:max-h-[200px] md:max-h-[250px] 
    object-contain bg-white
  "
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center w-[92%] sm:w-4/5 md:w-3/4 mx-auto mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >

            <img
              src="/assets/deal.png"
              alt="Privacy"
              className="
    rounded-2xl shadow-md 
    w-[60%] sm:w-[70%] md:w-[75%]   /* mobile = 60%, tablet = 70%, desktop = 75% */
    max-h-[180px] sm:max-h-[200px] md:max-h-[250px] 
    object-contain bg-white
  "
            />

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-[#E0F2FB] rounded-2xl p-3'
          >
            <p
              className="
    
      text-gray-700 
      text-sm sm:text-base md:text-lg   /* font-size responsive */
      leading-relaxed 
      px-3 sm:px-0 
      text-center md:text-left          /* center on mobile, left on desktop */
    "
            >
              Scan2Alert uses Whatsapp Business Account, which makes it quite easy for all users to use the platform.
              The alert is sent directly via WhatsApp, allowing issues to be resolved instantly, respectfully, and without involving enforcement.
            </p>
          </motion.div>

        </div>

      </motion.div>

      <Footer />
    </div>
  );
};

export default About;








