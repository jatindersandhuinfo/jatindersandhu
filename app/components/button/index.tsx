import { ButtonProps } from '@/lib/type/button';

const YoutubeSvg = ({ width, height, style, title, icon, algin = 'right' }: ButtonProps) => {
    return (
        <button style={{ ...style, width: width ?? '220px', height: height ?? '40px' }}
            className="text-[var(--color-black-light)] bg-[var(--color-yello-dark)]">
            {icon && algin == 'left' && icon}  {title} {icon && algin == 'right' && icon}
        </button>
    )
}

export default YoutubeSvg;

