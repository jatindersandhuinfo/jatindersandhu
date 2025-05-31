import PageSection from "@/app/components/common/pagesection";
import {EducationMain, Education } from "@/lib/data/info";
import InfoCard from "@/app/components/card/info";

const InfoSection = ({id}:{id:string}) => {
    return (
        <PageSection id={id} title={EducationMain?.title} desc={EducationMain?.desc}>
            <div className="flex flex-col my-6 bg-[var(--color-white)] p-12">
                {Education && Education.map(({ title, date, subtitle, desc }, idx) => (
                    <InfoCard type="edu" key={idx} title={title} date={date} subtitle={subtitle} desc={desc} />
                ))}
            </div>
        </PageSection>
    )
}
export default InfoSection;