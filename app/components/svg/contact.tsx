import type { IconProps } from '@/lib/type/icon';

const ContactSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_213)">
                <path d="M4.84125 14.25L1.5 16.875V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H4.84125Z" fill={fill?? "#1B1B1B"} />
            </g>
            <defs>
                <clipPath id="clip0_3_213">
                    <rect width="18" height="18" fill={fill ?? "white"} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ContactSvg;