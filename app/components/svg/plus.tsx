import type { IconProps } from '@/lib/type/icon';

const PlusSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_913)">
                <path d="M23.8335 23.8334V10.8334H28.1668V23.8334H41.1668V28.1667H28.1668V41.1667H23.8335V28.1667H10.8335V23.8334H23.8335Z" fill="#2B2B2B" />
            </g>
            <defs>
                <clipPath id="clip0_2_913">
                    <rect width="52" height="52" fill={fill ?? "white"} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PlusSvg;