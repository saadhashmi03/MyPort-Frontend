// import './TypingEffectAnimation.css'; // CSS file for styling
import { useState } from 'react';
import HomeCard from './HomeCard';
import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';



export const AnimatedComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`hover-div ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
    </div>
  );
};


// for progress bar 




export const ProgressBar = ({ progress }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      progressBarRef.current,
      { width: '0%' },
      { width: `${progress}%`, duration: 1.5, ease: 'power2.inOut' }
    );
  }, [progress]);

  return (
    <div className="progress-bar bg-gray-300 rounded-full overflow-hidden">
      <div
        className="progress-bar-inner bg-gray-500 h-full"
        ref={progressBarRef}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};




const TypingEffectAnimation = () => {
  return (
    <div className="typing-effect">
      <HomeCard/>
    </div>
  );
};







export default AnimatedComponent;
