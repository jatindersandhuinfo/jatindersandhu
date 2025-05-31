import type { SkillProps } from '@/lib/type/skill';

const Skill = ({ name, Icon, color }: SkillProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 sm:gap-3 p-2 sm:p-5 rounded-lg text-white w-24 h-24 sm:w-36 sm:h-36"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-xl" size={50} />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

export default Skill;
