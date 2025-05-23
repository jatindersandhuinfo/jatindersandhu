import type { IconProps } from '@/lib/type/icon';

const AvailableSvg = ({ fill,className }: IconProps) => {
    return (
        <svg  className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_454)">
                <circle cx="18" cy="14" r="8" fill={fill ?? "#7EB942"} />
            </g>
            <defs>
                <filter id="filter0_d_2_454" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_454" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_454" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default AvailableSvg;