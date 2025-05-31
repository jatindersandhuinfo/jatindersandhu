import ContactCard from "@/app/components/card/contact";
import { items } from "@/lib/data/contact";
import PageSection from "@/app/components/common/pagesection";

const Portfolio = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title="Contact information" desc="">
            <div className="flex flex-col md:flex-row gap-3 py-10 w-full items-center">
                <ContactCard items={items} />

            </div>
            <img
                src="/chd_map1.png"
                alt="Chandigarh"
                className="w-full pt-10 h-[600px] object-cover"
            />
        </PageSection>
    );
};

export default Portfolio;
