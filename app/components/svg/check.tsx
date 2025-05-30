import type { IconProps } from '@/lib/type/icon';

const CheckSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_103)">
                <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" fill="#1B1B1B" />
            </g>
            <defs>
                <clipPath id="clip0_3_103">
                    <rect width="24" height="24" fill={fill ?? "white"}/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default CheckSvg;