import type { SkillProps } from '@/lib/type/skill';

const Skill = ({ title, Icon }: SkillProps) => {
    return (
        <div className="flex flex-col gap-2 items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <Icon />
            <span className="text-gray-300">{title}</span>
        </div>
    )
}
export default Skill;