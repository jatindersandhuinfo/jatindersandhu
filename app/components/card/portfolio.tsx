"use client";
import { useState } from "react";
import { Project } from "@/lib/type/portfolio";
import Filter from "../common/filters";

interface Props {
    projects: Project[];
}

const PortfolioCard = ({ projects }: Props) => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) =>
                project.category.toLowerCase().includes(activeFilter.toLowerCase())
            );

    return (
        <>
            <Filter setActiveFilter={setActiveFilter} activeFilter={activeFilter} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map(({ id, href, image, title, category }) => (
                    <div
                        key={id}
                        className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
                    >
                        <a href={href}>
                            <img
                                className="w-full h-60 object-cover"
                                src={image}
                                alt={title}
                                loading="lazy"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                            <div className="p-4 flex flex-col items-center justify-between relative z-10">
                                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                                    {title}
                                </h3>
                                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                                    {category}
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PortfolioCard;

