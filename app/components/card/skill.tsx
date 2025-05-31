import type { SkillProps } from '@/lib/type/skill';

const Skill = ({ name, Icon, color }: SkillProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 p-5 rounded-lg text-white w-32 h-32"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-xl" />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

export default Skill;
