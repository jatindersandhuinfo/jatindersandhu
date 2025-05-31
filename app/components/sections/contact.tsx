import ContactCard from "@/app/components/card/contact";
import { items } from "@/lib/data/contact";
import PageSection from "@/app/components/common/pagesection";

const Portfolio = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title="Contact information" desc="">
            <div className="flex flex-col py-10 w-full justify-center items-center">
                <ContactCard items={items} />
                <img
                    src="/chd_map.png"
                    alt="Chandigarh"
                    className="w-full pt-10 h-[400px] object-cover"
                />
            </div>
        </PageSection>
    );
};

export default Portfolio;
