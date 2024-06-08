import React, { useRef, useEffect } from "react";
import myImg from "../assets/port.jpg";
import { gsap } from "gsap";
// import "./HomeCard.css"; // Import CSS for styles

const HomeCard = () => {
  const revealRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(revealRef.current, { width: "0%", duration: 1.5 }).from(
      imgRef.current,
      { scale: 1.1, duration: 1.5 },
      "-=1.5"
    ); // Subtle scale effect
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 text-gray-500">Hey!</h1>
        <p className="text-gray-500 text-xl lg:text-2xl">
          My name is <b className="navbar-text">Saad</b> and I am a <b className="navbar-text">React developer</b>  Developer. I am 22 years old
          and from India. I focus on creating web applications and design
          systems that add growth to your businesses and more.
        </p>
        <p className="text-gray-500 text-xl lg:text-2xl">
          I'm committed to furthering my skills and achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left" className="image-container">
        <div className="reveal" ref={revealRef}></div>
        <img src={myImg} alt="profile" className="reveal-image" ref={imgRef} />
      </div>
    </div>
  );
};

export default HomeCard;
