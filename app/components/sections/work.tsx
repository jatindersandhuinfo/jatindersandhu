import PageSection from "@/app/components/common/pagesection";
import { WorkMain, Work} from "@/lib/data/info";
import InfoCard from "@/app/components/card/info";

const WorkSection = ({id}:{id:string}) => {
    return (
        <PageSection id={id} title={WorkMain?.title} desc={WorkMain?.desc}>
            <div className="flex flex-col my-6 bg-[var(--color-white)] p-12 px-6 sm:p-12">
                {Work && Work.map(({ title, date, subtitle, desc }, idx) => (
                    <InfoCard type="Work" key={idx} title={title} date={date} subtitle={subtitle} desc={desc} />
                ))}
            </div>
        </PageSection>
    )
}
export default WorkSection;