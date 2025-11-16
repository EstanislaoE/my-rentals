"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/patrick2.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* --- Photo Credits Overlay --- */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-xs bg-gray-500 p-1 rounded">
        Photo by{" "}
        <a
          href="https://unsplash.com/photos/stone-steps-ascend-through-a-lush-moss-covered-forest-x1dBqw0rqmg"
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
          <p className="text-2xl text-white mb-8">
            Explore different Vista Points
          </p>
          <div className="flex justify-center">
            <Input
              type="text"
              value="Search query"
              onChange={() => {}}
              placeholder="Search by Industry"
              className="w-full text-white! max-w-lg rounded-none rounded-l-xl borbg-der-none teal-400 h-12 "
            />
            <Button
              onClick={() => {}}
              className="bg-primary-400 text-white rounded-none rounded-r-xl border-none hover:bg-green-500 h-12"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
