
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-[95%] p-4 relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 bg-white shadow-lg text-gray-600 hover:text-gray-900 rounded-full p-1"
            >
              <X size={20} />
            </button>

            <video
              src="https://res.cloudinary.com/dvrwi63s8/video/upload/v1757943902/Scan2Alert_-_Friends_kltmqu.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-64 sm:h-80 md:h-[400px] rounded-xl object-cover shadow-md"
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-bold text-[#0084C2]">
                Welcome to Scan2Alert 🚗
              </h2>
              <p className="text-gray-600 mt-2">
                Watch this quick video to see how our platform works.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
