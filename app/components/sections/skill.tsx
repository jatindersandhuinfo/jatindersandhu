import PageSection from "@/app/components/common/pagesection";
import { groupedExtraSkills, SkillMain } from "@/lib/data/skill";
import Skill from "@/app/components/card/skill";

const WorkSection = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title={SkillMain?.title} desc={SkillMain?.desc}>
            <div className="flex flex-row flex-wrap justify-center items-center my-6 gap-4 bg-[var(--color-white)] py-4 px-12 w-full">
                {groupedExtraSkills.map(({ name, icon }, idx) => (
                    <Skill key={idx} title={name} Icon={icon} />
                ))}
            </div>
        </PageSection>
    );
};

export default WorkSection;

