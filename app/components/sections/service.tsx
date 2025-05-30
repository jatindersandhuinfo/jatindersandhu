import PageSection from "@/app/components/common/pagesection";
import { ServiceMain, Service } from "@/lib/data/service";
import ServiceCard from "@/app/components/card/service";

const ServiceSection = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title={ServiceMain?.title} desc={ServiceMain?.desc}>
            <div className="flex items-center justify-center flex-wrap gap-4 my-6">
                {Service && Service.map(({ Icon, desc, title }, idx) => (
                    <ServiceCard key={idx} Icon={Icon} title={title} desc={desc} />
                ))}
            </div>
        </PageSection>
    )
}
export default ServiceSection;