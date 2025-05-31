import { filters } from "@/lib/data/portfolio";

interface Props {
    setActiveFilter: (value: string) => void;
    activeFilter: string;
}

const Filter = ({ setActiveFilter, activeFilter }: Props) => {
    return (
        <div className="flex flex-row justify-center items-center mb-8">
            {filters && filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`filter-button px-4 py-2 mr-2 mb-2 rounded ${activeFilter !== filter
                        ? "text-[var(--color-balck-dark)]"
                        : "text-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
};
export default Filter;