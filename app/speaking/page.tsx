import EducationSection from "@/app/components/sections/education";
import WorkSection from "@/app/components/sections/work";

const Services = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <EducationSection id="education" />
      <WorkSection id="work" />
    </div>
  );
}
export default Services; 