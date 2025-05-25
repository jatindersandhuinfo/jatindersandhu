import type { InfoRowProps } from '@/lib/type/infoRow';

const InfoRow = ({
    label,
    value,
    valueColor = '',
}: InfoRowProps) => (
    <div className="flex justify-between">
        <span className="text-sm bg-[var(--color-yellow)] px-2 rounded">{label}:</span>
        <span className={`ml-2 ${valueColor}`}>{value}</span>
    </div>
);
export default InfoRow;