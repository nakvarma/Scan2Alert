

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import Footer from './Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import qrCode from "../assets/qrcode.png";

const whyScan2Alert = [
  {
    text: "Scan2Alert is FREE!\n Anyone Anywhere in INDIA\n can use Scan2Alert for FREE!.",
    gif: "/assets/free.png",
  },
  {
    text: "No APP Needed\n Scan2Alert uses Whatsapp to\n Register/contact the owner.",
    gif: "/assets/whatsapp.png",
  },
  {
    text: "We ensure Privacy. All details remain Confidential.\n No contact details are shared between the owner and the complainer.",
    gif: "/assets/privacy.png",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-white overflow-x-hidden relative">
      <Navbar />
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#7BBBFF] via-[#05OF2A] to-[#7BBBFF] opacity-80"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-4 sm:p-8 md:p-10 space-y-10">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ">
          </div>
          <div className="text-center">


            <h1 className="text-4xl lg:text-6xl font-bold text-[#0084C2]">
              Welcome to Scan2Alert!           </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm p-3">
              <Carousel
                showArrows
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={8000}
                transitionTime={800}
                emulateTouch
                className="rounded-2xl"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/assets/1st Pic.png"
                    alt="slider 1 bg"
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
                  />
                  <img
                    src="/assets/1st Pic.png"
                    alt="slider 1"
                    className="relative w-full h-full object-contain rounded-2xl z-10"
                  />
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/assets/2nd Pic.png"
                    alt="slider 2 bg"
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
                  />
                  <img
                    src="/assets/2nd Pic.png"
                    alt="slider 2"
                    className="relative w-full h-full object-contain rounded-2xl z-10"
                  />
                </div>
              </Carousel>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm p-3">
              <div className="w-full aspect-video">
                <video
                  src="https://res.cloudinary.com/dvrwi63s8/video/upload/v1757936756/Steps_video_720p_nppqdd.mp4"
                  controls
                  controlsList="nodownload"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center space-y-10">
            <div>
              <img src={qrCode} alt="QR" className="w-40 h-40 mx-auto" />
              <span className="text-xl font-bold text-[#0084C2]">
                Scan The QR code to
                <br />
                Register/ Raise an Issue
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyScan2Alert.map((reason, idx) => {
                const lines = reason.text.split("\n");
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 space-y-2"
                  >
                    <div className="flex items-center justify-center w-20 h-20">
                      <img
                        src={reason.gif}
                        alt="reason gif"
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    <p className="text-gray-800 font-semibold text-sm whitespace-pre-line">
                      <span className="text-blue-600">{lines[0]}</span>
                      {lines.slice(1).map((line, i) => (
                        <React.Fragment key={i}>
                          {"\n"}
                          {line}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
