import type { SkillProps } from '@/lib/type/skill';

const Skill = ({ title, Icon, color }: SkillProps) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-white"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-xl" />
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default Skill;
