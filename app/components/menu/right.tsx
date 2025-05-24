import type { RightMenuProps } from '@/lib/type/menu';
import Link from 'next/link';

const RightMenu = ({ items }: RightMenuProps) => {
    return (
        items && items.map(({ name, link, icon: Icon }) => (
            <Link
                key={name}
                href={link}
                className="w-10 h-10 rounded-full flex justify-center items-center bg-[var(--color-silver)] hover:bg-[var(--color-yello-dark)] "
            >
                <Icon className="w-4 h-4 text-[var(--color-grey)] hover:text-[var(--color-black-light)]" title={name} />
            </Link>
        ))
    )
}
export default RightMenu;