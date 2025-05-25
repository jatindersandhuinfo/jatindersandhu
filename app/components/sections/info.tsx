import PageSection from "@/app/components/common/pagesection";
import { WorkMain, Work, EducationMain, Education } from "@/lib/data/info";
import InfoCard from "@/app/components/card/info";

const InfoSection = () => {
    return (
        <>
            <PageSection title={EducationMain?.title} desc={EducationMain?.desc}>
                <div className="flex flex-col my-6 bg-[var(--color-white)] py-4 px-12">
                    {Education && Education.map(({ title, date, subtitle, desc }, idx) => (
                        <InfoCard type="edu" key={idx} title={title} date={date} subtitle={subtitle} desc={desc} />
                    ))}
                </div>
            </PageSection>
            <PageSection title={WorkMain?.title} desc={WorkMain?.desc}>
                <div className="flex flex-col my-6 bg-[var(--color-white)] py-4 px-12">
                    {Work && Work.map(({ title, date, subtitle, desc }, idx) => (
                        <InfoCard type="Work" key={idx} title={title} date={date} subtitle={subtitle} desc={desc} />
                    ))}
                </div>
            </PageSection>
        </>

    )
}
export default InfoSection;