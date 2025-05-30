import type { IconProps } from '@/lib/type/icon';

const ProgressBarSvg = ({ width,fill,className }: IconProps) => {
    return (
        <svg  className={className} width="222" height="6" viewBox="0 0 222 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="220.5" height="4.5" rx="2.25" stroke="#FFB400" strokeWidth="0.5" />
            <rect x="2" y="2" width={width ?? "220.5"} height="2" rx="1" fill={fill ?? "#FFB400"}  />
        </svg>
    )
}
export default ProgressBarSvg;