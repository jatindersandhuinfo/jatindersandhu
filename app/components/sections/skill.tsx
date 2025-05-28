import { SkillMain } from "@/lib/data/skill";
import Skill from "@/app/components/card/skill";

import {
    FaWordpress,
    FaLaravel,
    FaShopify,
    FaBootstrap,
    FaSass,
    FaGithub,
    FaAws,
} from 'react-icons/fa';
import {
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiTailwindcss,
    SiDigitalocean,
    SiJson,
    SiJquery
} from 'react-icons/si';

import { IconType } from 'react-icons';

export interface SkillProps {
    name: string;
    Icon: IconType;
    color: string;
}

export const groupedExtraSkills: SkillProps[] = [
    { name: 'WordPress', Icon: FaWordpress, color: '#21759b' },
    { name: 'Laravel', Icon: FaLaravel, color: '#ff2d20' },
    { name: 'Shopify', Icon: FaShopify, color: '#96bf48' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
    { name: 'MySQL', Icon: SiMysql, color: '#00758f' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
    { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
    { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Sass', Icon: FaSass, color: '#cc6699' },
    { name: 'jQuery', Icon: SiJquery, color: '#0769ad' },
    { name: 'GitHub', Icon: FaGithub, color: '#181717' },
    { name: 'AWS', Icon: FaAws, color: '#ff9900' },
    { name: 'DigitalOcean', Icon: SiDigitalocean, color: '#0080ff' },
    { name: 'REST API', Icon: SiJson, color: '#e34c26' },
];

const WorkSection = ({ id }: { id: string }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            <h3 className="text-[var(--color-balck-dark)] text-5xl font-semibold my-4">{SkillMain?.title}</h3>
            <div className="flex flex-row flex-wrap justify-center items-center mb-6 gap-4 bg-[var(--color-white)] py-4 px-12 w-full">
                {groupedExtraSkills.map(({ name, Icon, color }, idx) => (
                    <Skill key={idx} title={name} Icon={Icon} color={color} />
                ))}
            </div>
        </div>
    );
};

export default WorkSection;

