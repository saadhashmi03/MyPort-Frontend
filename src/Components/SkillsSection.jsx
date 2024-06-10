import axios from 'axios';
import  { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '../redux/slices/userSlice';
import { ProgressBar } from './Animation'; // Ensure the path is correct
import { gsap } from 'gsap';

const SkillsSection = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.user.skills);
  const skillsContainerRef = useRef(null);
  const progressBarRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://myportapi.onrender.com/api/getSkill');
        const data = res.data.skills;
        dispatch(setSkills(data));
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    progressBarRefs.current = progressBarRefs.current.slice(0, skills.length);
  }, [skills]);

  const handleMouseEnter = () => {
    gsap.to(progressBarRefs.current, {
      width: (index) => `${skills[index].level * 20}%`,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(progressBarRefs.current, {
      width: '0%',
      duration: 1.5,
      ease: 'power2.inOut',
    });
  };

  return (
    <section
    id='skills'
      className="py-12 text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={skillsContainerRef}
    >
      <div className="container mx-auto px-4 mb-5">
        <h2 className="text-6xl font-bold text-left gradient-text">My Skills</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20">
          {skills.map((skill, index) => (
            <div key={skill._id} className="bg-gray-900 shadow-lg rounded-lg p-6 uppercase relative">
              <h3 className="text-xl font-semibold mb-2">{skill.skill}</h3>
              <div className="progress-bar bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="progress-bar-inner bg-gray-500 h-full"
                  ref={(el) => (progressBarRefs.current[index] = el)}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
