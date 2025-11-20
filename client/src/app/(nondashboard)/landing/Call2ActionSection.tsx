import Image from "next/image";
import React from "react";

const Call2ActionSection = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-cyan-900 bg-opacity-10"></div>
      {/* <motion.div></motion.div> */}
    </div>
  );
};

export default Call2ActionSection;
