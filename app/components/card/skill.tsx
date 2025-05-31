import type { SkillProps } from '@/lib/type/skill';

const Skill = ({ name, Icon, color }: SkillProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-3 p-5 rounded-lg text-white w-36 h-36"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-xl" size={50} />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

export default Skill;
