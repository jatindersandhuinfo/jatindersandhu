import type { IconProps } from '@/lib/type/icon';

const StarSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 13.2448L12.9107 12.2343L14.5446 17.3684L9 13.2448ZM18 6.60873H11.1161L9 0L6.88393 6.60873H0L5.57143 10.7051L3.45535 17.3138L9.02679 13.2175L12.4554 10.7051L18 6.60873Z" fill={fill ?? "#1B1B1B"}/>
        </svg>
    )
}

export default StarSvg;