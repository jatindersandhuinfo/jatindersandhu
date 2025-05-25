import PageSection from "@/app/components/common/pagesection";
import { ServiceMain, Service } from "@/lib/data/service";
import ServiceCard from "@/app/components/card/service";
const ServiceSection = () => {
    return (
        <PageSection title={ServiceMain?.title} desc={ServiceMain?.desc}>
            <div className="flex items-center flex-wrap gap-5 my-6">
                {Service && Service.map(({ Icon, desc, title }, idx) => (
                    <ServiceCard key={idx} Icon={Icon} title={title} desc={desc} />
                ))}
            </div>
        </PageSection>
    )
}
export default ServiceSection;