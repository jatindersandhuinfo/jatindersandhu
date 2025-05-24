import ProgressBarSvg from "@/app/components/svg/progress-bar";
import type { ProgressProps } from '@/lib/type/progressbar';

const ProgressBarSection = ({ skill, percent }: ProgressProps) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
                <p className="text-[var(--color-grey)]">{skill}</p>
                <p className="text-[var(--color-grey)]">{percent}%</p>
            </div>
            <ProgressBarSvg width={`222px`} />
        </div>
    )
}
export default ProgressBarSection;