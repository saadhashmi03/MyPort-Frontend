import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

const AboutCard = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration:10,
      text: "My apps are well designed and optimized, captivating users and meeting their objectives",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
          id="about"
      data-aos="zoom-in-left"
      className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        What I do
      </span>
      <p
        className="text-3xl lg:text-7xl lg:w-[85%] text-gray-500"
        ref={textRef}
      >
        {/* This text will be replaced by GSAP animation */}
      </p>
    </div>
  );
};

export default AboutCard;
