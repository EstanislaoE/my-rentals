"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      stageChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ containerVariants }}
      className="py-12 bg-white mb-16 "
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-2xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600">Find what you nt retl</p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Search for yoru dm property fsalfjk afsljkf asdlkfj asfdlkj afsdl
            kjasf asjfdl af lkfalk lkasdf
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Browse through our extensive collection of rntal faslff",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Book ntal ",
              description: "nsive collection of rntal faslff",
            },
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description: "nsive collection of rntal faslff",
            },
          ].map((CardContent, index) => (
            <motion.div key={index} variants={itemVariants}></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="text-ceter">
    <div className="p-4 rounded-lg mb-4 flex items-center justify-center h-48">
      <Image
        src={imageSrc}
        width={400}
        height={400}
        className="w-full h-full object-contain"
        alt={title}
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 "> {title}</h3>
    <p className="mb-4"> {description}</p>
    <Link
      href={linkHref}
      className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-300"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default DiscoverSection;
