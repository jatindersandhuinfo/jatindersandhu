import type { IconProps } from '@/lib/type/icon';

const FbSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_79)">
                <path d="M8.16659 7.87484H9.62492L10.2083 5.5415H8.16659V4.37484C8.16659 3.774 8.16659 3.20817 9.33325 3.20817H10.2083V1.24817C10.0181 1.22309 9.3 1.1665 8.54167 1.1665C6.95792 1.1665 5.83325 2.13309 5.83325 3.90817V5.5415H4.08325V7.87484H5.83325V12.8332H8.16659V7.87484Z" fill="#1B1B1B" />
            </g>
            <defs>
                <clipPath id="clip0_3_79">
                    <rect width="14" height="14"  fill={fill ?? "white"} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default FbSvg;