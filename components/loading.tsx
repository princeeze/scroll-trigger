"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 flex items-center justify-center left-0 h-[100dvh] z-10 w-full"
          initial={{ backgroundColor: "#FFFFFF" }}
          animate={{
            backgroundColor: "#2E2E2E",
            transition: { duration: 5 },
          }}
          exit={{
            y: "100dvh",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {" "}
          <span className="text-[15vw] animate-pulse mix-blend-difference">
            *
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
