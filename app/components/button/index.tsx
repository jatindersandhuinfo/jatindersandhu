import { ButtonProps } from '@/lib/type/button';

const Button = ({ width, height, style, title, icon, algin = 'right' }: ButtonProps) => {
    return (
        <button style={{ ...style, width: width ?? '220px', height: height ?? '40px' }}
            className="text-[var(--color-balck-dark)] bg-[var(--color-yellow)] w-fu font-semibold py-2 px-4 flex items-center justify-center gap-2">
            {icon && algin == 'left' && icon}  {title} {icon && algin == 'right' && icon}
        </button>
    )
}

export default Button;

