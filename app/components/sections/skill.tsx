import { SkillMain } from "@/lib/data/skill";
import Skill from "@/app/components/card/skill";
import { groupedExtraSkills } from "@/lib/type/skill";
import PageSection from "@/app/components/common/pagesection";

const WorkSection = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title={SkillMain?.title} desc={''}>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 bg-[var(--color-white)] p-10 w-full">
                    {groupedExtraSkills.map(({ name, Icon, color }, idx) => (
                        <Skill key={idx} name={name} Icon={Icon} color={color} />
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default WorkSection;

