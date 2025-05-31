import PortfolioCard from "@/app/components/card/portfolio";
import { projects } from "@/lib/data/portfolio";
import PageSection from "@/app/components/common/pagesection";

const Portfolio = ({ id }: { id: string }) => {
    return (
        <PageSection id={id} title="Portfolio Showcase" desc="Discover our latest projects and success stories">
            <div className="flex flex-col pb-12 w-full">
                <PortfolioCard projects={projects} />
            </div>
        </PageSection>
    );
};

export default Portfolio;
