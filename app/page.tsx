import BannerSection from "@/app/components/sections/banner";
import ServiceSection from "./components/sections/service";
import EducationSection from "./components/sections/education";
import SkillSection from "./components/sections/skill";
import WorkSection from "./components/sections/work";

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-4 pb-20">
      <BannerSection id="/" />
      <ServiceSection id="services" />
      <SkillSection id="skill" />
      <EducationSection id="speaking" />
      <WorkSection id="work" />
    </div>
  );
}
export default Home; 