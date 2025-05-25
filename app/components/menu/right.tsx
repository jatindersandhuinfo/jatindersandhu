'use client';

import { menuItems } from '@/lib/menuitems';
import { usePathname } from 'next/navigation'

const RightMenu = () => {
      const pathname = usePathname();
    return (
        menuItems && menuItems.map(({ name, link, icon: Icon }) => {
            const isActive = pathname == link;
            return (
                <a
                    key={name}
                    href={link}
                    className={`w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 ${isActive ? 'bg-[var(--color-yellow)]' : 'bg-[var(--color-silver)]'
                        } hover:bg-[var(--color-yellow)]`}
                >
                    <Icon
                        className={`w-4 h-4 hover:fill-[var(--color-black-light)] `}
                        title={name}
                        fill={`${isActive
                            ? '#18191A'
                            : '#767676'
                            }`}
                    />
                </a>
            );
        })
    )
}
export default RightMenu;