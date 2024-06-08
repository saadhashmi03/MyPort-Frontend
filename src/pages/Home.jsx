import HomeCard from "../Components/HomeCard";
import AboutCard from "../Components/AboutCard";
import ContactSection from "../Components/ContactSection";
import AnimatedComponent from "../Components/Animation";
import ProjectSection from '../Components/ProjectSection';
import SkillsSection from '../Components/SkillsSection';
import TypingEffectAnimation from "../Components/Animation";
import Header from "../Components/PortfolioCard";
import Navbar from "../Components/Navbar";

function Home() {
  return (
      <div className="w-[80vw] mx-auto">
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-10">
        <Header />
        <Navbar />
      </div>
        <HomeCard />
        <TypingEffectAnimation />
        <AnimatedComponent />
        <AboutCard />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Home;
