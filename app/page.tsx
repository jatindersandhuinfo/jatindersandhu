import Section from "@/app/components/common/section";
import { groupedExtraSkills } from "@/lib/profileData";
import DoubleBox from "./components/svg/doubleBox";

export default function Home() {
  return (
    <div className="gap-16 ">
      <main className="flex flex-col items-center sm:items-start">
        {/* Extra Skills */}
        <Section title="Extra Skills">
          {groupedExtraSkills.map((group, idx) => (
            <div key={idx} className="flex flex-row flex-wrap gap-2">
              <h4 className="font-semibold text-gray-700 mb-1 text-left">{group.title}: </h4>
              <ul className="text-left text-gray-600 flex flex-row flex-wrap items-center gap-2">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <DoubleBox className="mt-1" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      </main>

    </div>
  );
}