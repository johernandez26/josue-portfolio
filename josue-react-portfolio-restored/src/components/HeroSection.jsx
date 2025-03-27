import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden text-black dark:text-white bg-white dark:bg-[#1e1e2e]">
      {/* ✅ Particles behind everything */}
      <HeroBackground />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold z-10"
      >
        Hi, I'm Josue Hernandez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-2xl mt-4 max-w-xl z-10 text-gray-700 dark:text-gray-300"
      >
        IT Specialist & Software Developer passionate about building tech that empowers people.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-12 animate-bounce text-gray-500 z-10 cursor-pointer hover:text-accent"
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
