import type { IconProps } from '@/lib/type/icon';

const Tooltip = ({ title, fill,className }: IconProps) => {
    return (
        <svg  className={className} width="65" height="33" viewBox="0 0 65 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H26.8039L32 33L37.1962 24H63C64.1046 24 65 23.1046 65 22V2C65 0.895431 64.1046 0 63 0H2Z" fill={fill ?? "#2B2B2B"} />
            <title className='text-[var(--color-white)]'>{title}</title>
        </svg>
    )
}
export default Tooltip;