import BannerSection from "@/app/components/sections/banner";
import ServiceSection from "./components/sections/service";
import EducationSection from "./components/sections/education";
import SkillSection from "./components/sections/skill";
import WorkSection from "./components/sections/work";
import Footer from "@/app/components/footer";
import Portfolio from "@/app/components/sections/portfolio";

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-4">
      <BannerSection id="/" />
      <ServiceSection id="services" />
      <SkillSection id="skill" />
      <EducationSection id="speaking" />
      <WorkSection id="work" />
      <Portfolio id="portfolio" />
      <Footer />
    </div>
  );
}
export default Home; 