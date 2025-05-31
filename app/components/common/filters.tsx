import { filters } from "@/lib/data/portfolio";

interface Props {
    setActiveFilter: (value: string) => void;
    activeFilter: string;
}

const Filter = ({ setActiveFilter, activeFilter }: Props) => {
    return (
        <div className="flex flex-col md:flex-row items-center mb-8">
            {filters && filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`filter-button px-4 py-2 mr-2 mb-2 text-white rounded ${activeFilter === filter
                        ? "bg-pink-500"
                        : "bg-indigo-500 hover:bg-pink-500"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
};
export default Filter;