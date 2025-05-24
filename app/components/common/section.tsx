import type { SectionProps } from '@/lib/type/section';

const Section = ({ title, children }: SectionProps) => (
    <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {children}
    </div>
);
export default Section;