import BannerSection from "@/app/components/sections/banner";
import { groupedExtraSkills } from "@/lib/data/skill";
import DoubleBox from "@/app/components/svg/doubleBox";
import Section from "@/app/components/common/section";
import Skill from "@/app/components/card/skill";

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-4 mb-4">
      <BannerSection id="home" />
      <div className="bg-white w-full flex flex-col items-center sm:items-start p-16">
        <Section title="Extra Skills">
          {groupedExtraSkills && groupedExtraSkills.map((title:string, idx:number) => (
            <Skill key={idx} title={title} Icon={DoubleBox} />
          ))}
        </Section>
      </div>
    </div>
  );
}
export default Home; 