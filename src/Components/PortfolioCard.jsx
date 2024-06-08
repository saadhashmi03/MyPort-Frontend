// src/Components/PortfolioCard.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = [" Web Developer ", " React Developer ", ];
    let textIndex = 0;

    const changeText = () => {
      gsap.to(textRef.current, {
        duration: 2,  
        text: `I am ${texts[textIndex]}`,
        ease: "power1.inOut",
        y: -20,
        onComplete: () => {
          gsap.to(textRef.current, { y: 0 });
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(changeText, 1000);
        
        },
      });
    };

    changeText();
  }, []);

  return (
    <header className="py-6">
      <div>
        <p className=" navbar-text text-2xl">
          <span ref={textRef}>a MERN Developer</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
