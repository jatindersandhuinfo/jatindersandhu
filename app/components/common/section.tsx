import type { SectionProps } from '@/lib/type/section';

const Section = ({ style, title, children, desc }: SectionProps) => (
    <div style={style}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className='text-[var(--color-grey)]'>{desc}</p>
        {children}
    </div>
);
export default Section;