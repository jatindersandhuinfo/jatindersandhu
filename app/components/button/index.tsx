import { ButtonProps } from '@/lib/type/button';

const YoutubeSvg = ({  width,  height, style }: ButtonProps) => {
    return (
        <button style={style} className={`w-[${width ?? '220px'}] h-[${height ?? '40px'}]   `}>

        </button>
    )
}

export default YoutubeSvg;

