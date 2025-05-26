import BannerSection from "@/app/components/sections/banner";
import SkillSection from "@/app/components/sections/skill";

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-4 mb-4">
      <BannerSection id="home" />
      <SkillSection id="skill" />
    </div>
  );
}
export default Home; 