import type { IconProps } from '@/lib/type/icon';

const LinkedSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="9" height="9" stroke={fill ?? "#2B2B2B"} />
            <rect x="5.5" y="5.5" width="9" height="9" stroke={fill ?? "#2B2B2B"}  />
        </svg>
    )
}

export default LinkedSvg;