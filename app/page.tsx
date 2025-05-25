// import { groupedExtraSkills } from "@/lib/data/profile";
// import DoubleBox from "@/app/components/svg/doubleBox";
import BannerSection from "@/app/components/sections/banner";
import ServiceSection from "@/app/components/sections/service";
import InfoSection from "@/app/components/sections/info";

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      {/* Banner Section */}
      <BannerSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Education & Work */}
      <InfoSection />

      {/* Extra Skills */}
      {/* <Section title="Extra Skills">
        {groupedExtraSkills.map((group, idx) => (
          <div key={idx} className="flex flex-row flex-wrap gap-2">
            <h4 className="font-semibold text-[var(--color-balck-dark)] mb-1 text-left">{group.title}: </h4>
            <ul className="text-left text-[var(--color-balck-dark)] flex flex-row flex-wrap items-center gap-2">
              {group.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <DoubleBox className="mt-1" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section> */}
    </div>
  );
}
export default Home; 