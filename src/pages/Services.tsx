import React from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import Footer from "./Footer";

const welcomeData = [
  {
    image: "/assets/Welcome - screenshot.jpg",
    arrowText:
      "Once you scan QR code - will be redirected to Scan2Alert WABA Account.",
    name: "Welcome",
    position: "left",
  },
  {
    image: "/assets/4.jpg",
    description: "Your vehicle is successfully registered with Scan2Alert ",
    name: "Register",
    position: "right",
  },
  {
    image: "/assets/3.jpg",
    name: "Raise an Issue",
    arrowText: "Select the issue you want to notify the car owner about",
    position: "left",
  },
  {
    name: "Alert sent to Owner",
    description: "Owner received an alert that his vehicle is blocking Road ",
    image: "/assets/2.jpg",
    position: "right",
  },
  {
    name: "Response Options",
    description: "Options for the owner to respond to the complainer ",
    image: "/assets/5.jpg",
    position: "left",
  },
  {
    name: "Response from Owner",
    description:
      "Once the owner responds, the complainer will receive the message sent by Owner.",
    image: "/assets/6.jpg",
    position: "right",
  },
];
const Arrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className="w-40 h-20 text-[#0084C2] hidden lg:block"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  >
    {direction === "right" ? (
      <path d="M0,60 C80,60 120,40 190,40 L170,25 M190,40 L170,55" />
    ) : (
      <path d="M200,60 C120,60 80,40 10,40 L30,25 M10,40 L30,55" />
    )}
  </svg>
);

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-serif">
      <Navbar />

      <motion.div
        className="flex-1 px-4 sm:px-6 md:px-10 py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0084C2]">
              Our Services
            </h1>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">
              Scan2Alert provides a fast, secure and app-free way to communicate
              with vehicle owners using WhatsApp and standard QR code
            </p>
          </div>
          {welcomeData.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-6 mt-14 ${
                step.position === "right" ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >              <div className="flex-1 flex flex-col items-center">
                <p className="text-center text-2xl sm:text-3xl font-bold text-[#0084C2] mb-4">
                  {step.name}
                </p>
                <motion.img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="w-[350px] sm:w-[450px] md:w-[550px] max-h-[500px] object-contain rounded-2xl transform scale-105 transition-transform duration-500 ease-in-out hover:scale-110 shadow-md"
                />
              </div>
              <Arrow
                direction={step.position === "right" ? "left" : "right"}
              />
              <div className="flex-1 text-left max-w-lg bg-[#E0F2FB] p-6 rounded-2xl shadow-md border border-gray-200">
                {step.arrowText && (
                  <p className="mb-4 text-[#0084C2] font-medium italic">
                    {step.arrowText}
                  </p>
                )}
                {step.description && (
                  <p className="text-lg font-medium text-[#0084C2] italic whitespace-pre-line leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Welcome;











































