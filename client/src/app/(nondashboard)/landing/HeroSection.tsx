import Image from "next/image";
import React from "react";

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
      </div>
    </div>
  );
};

export default HeroSection;
