"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/patrick-hendry-mevy.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* --- Photo Credits Overlay --- */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-xs bg-black p-1 rounded">
        Photo by{" "}
        <a
          href="https://unsplash.com/@worldsbetweenlines?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Patrick Hendry
        </a>
        {/* --- Photo Credits Overlay --- */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 transform -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your initti
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
