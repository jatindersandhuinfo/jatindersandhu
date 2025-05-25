import type { SectionProps } from '@/lib/type/section';

const PageSection = ({ style, title, children, desc }: SectionProps) => (
    <div style={style} className="mt-24 flex flex-col w-full items-center">
        <div className='flex flex-col justify-center items-center mb-3'>
            <h3 className="text-[var(--color-balck-dark)] text-5xl font-semibold mb-2">{title}</h3>
            <p className='max-w-2xl text-center text-[var(--color-grey)]'>{desc}</p>
        </div>
        {children}
    </div>
);
export default PageSection;