import ContactCard from "@/app/components/card/contact";
import { items } from "@/lib/data/contact";
import PageSection from "@/app/components/common/pagesection";

const Portfolio = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title="Contact information" desc="">
            <div className="flex py-12 w-full">
                <ContactCard items={items} />
            </div>
        </PageSection>
    );
};

export default Portfolio;
