import type { SectionProps } from '@/lib/type/section';

const PageSection = ({ style, title, children, desc }: SectionProps) => (
    <div style={style} className="my-24 flex flex-col w-full items-center">
        <div className='max-w-md flex flex-col justify-center items-center'>
            <h3 className="text-[var(--color-balck-dark)] text-5xl font-semibold mb-2">{title}</h3>
            <p className='text-[var(--color-grey)]'>{desc}</p>
        </div>
        {children}
    </div>
);
export default PageSection;