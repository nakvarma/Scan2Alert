import React from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { CheckCircle, Shield, MessageCircle, Car, icons } from "lucide-react";
const whyScan2Alert = [
  {
    text: "Easy to use by anyone,as no app needed ,only whatsapp.",
    gif: '/assets/easy.gif',
  },
  {
    text: "Scan2Alert is free for all.",
     gif: '/assets/free.gif',

  },
  {
    text: "Privacy First  No Phone Numbers are shared.",
        gif: '/assets/user.gif',
  },
  {
    text: "Resolve issue amicably.",
            gif: '/assets/boss.gif',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white overflow-x-hidden font-serif">
      <Navbar />

      <motion.div
        className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
                  <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 flex flex-col space-y-12">

          <div className="text-center space-y-4 ">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0084C2] tracking-tight">

              How It Works
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scan2Alert makes Communication between the owner and the 
Complainant seamless, secure and hassle-free
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 bg-[#E0F2FB] text-[#0084C2 ]  rounded-2xl">
              <h2 className="flex items-center gap-3  text-lg font-semibold text-[#0084C2]">
                <span className="p-3 m-2 bg-white rounded-full">
                   <img
            src={'/assets/arrow.gif'}
            alt="reason gif"
            className="w-10 h-10  object-contain"
          />
                </span>
                
                Register Your Vehicle
              </h2>
              <p className="text-gray-600 ml-2 text-lg leading-relaxed">
                By scanning the QR code, Register your vehicle with Scan2Alert in <span className="font-sans">{"<40 secs."}</span> 
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="p-3 text-center font-medium text-[#0084C2] bg-gray-50">
"Vehicle Registration" Process              </div>
              <video
                controls
                    controlsList="nodownload"  

                className="w-full max-w-md mx-auto aspect-video rounded-b-2xl p-2"
              ><source 
    src="https://res.cloudinary.com/dvrwi63s8/video/upload/v1757937326/Scan2Alert_-_How_to_Register_y0l8gl.mp4"
    type="video/mp4" 
  />
              </video>
            </div>
             
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition order-2 lg:order-1">
              <div className="p-3 text-center font-lg text-[#0084C2] bg-gray-50">
"Raise an issue?" Process              </div>
              <video
                controls
                    controlsList="nodownload"  

                className="w-full max-w-md mx-auto aspect-video rounded-b-2xl p-2"
              >
                 <source 
    src="https://res.cloudinary.com/dvrwi63s8/video/upload/v1757936965/Scan2Alert_-_Raise_an_issue_gzlrmg.mp4"
    type="video/mp4" 
  />
              </video>
            </div>

           <div className="space-y-4 order-1 bg-[#E0F2FB] rounded-2xl lg:order-2">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-[#0084C2]">
                <span className="p-3 bg-white m-2 rounded-full">
                            <img
            src={'/assets/arrow.gif'}
            alt="reason gif"
            className="w-10 h-10 object-contain"
          />
                </span>
               Raise an issue
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed ml-2">
                By scanning the QR code on the vehicle you are facing issue with, you can contact the car owner in <span className="font-sans">{"<40 secs."}</span>  and let him/her know the issue you are facing.</p>
              <p className="text-[#0084C2] italic ml-2  text-lg leading-relaxed">
                Once the owner responds, you will receive the message sent by the owner.
              </p>
            </div>
          </motion.div>
          <div className="text-center space-y-10">
            <h2 className="text-3xl font-bold text-[#0084C2]">
              Why Scan2Alert?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyScan2Alert.map((reason, idx) => {
                return (
          <div
  key={idx}
  className="flex flex-col items-center text-center p-4 space-y-2"
>  <div className="flex items-center justify-center w-20 h-20">
    <img
      src={reason.gif}
      alt="reason gif"
      className="w-20 h-20 object-contain"
    />
  </div>
  <p className="text-gray-800 font-semibold text-sm">
    {reason.text}
  </p>
</div>

                );
              })}
            </div>
          </div>

       
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default HowItWorks;

