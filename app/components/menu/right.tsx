'use client';

import { useState } from 'react';
import { menuItems } from '@/lib/menuitems';
import { Link } from "react-scroll/modules";

const RightMenu = () => {
    const [pathname, setPathname] = useState<string | null>('/');

    return (
        menuItems && menuItems.map(({ name, link, icon: Icon }) => {
            const isActive = (link: string | null) => pathname === link;

            return (
                <Link
                    key={name}
                    to={link}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    spy={true}
                    onSetActive={() => setPathname(link)}
                    className={`w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 ${isActive(link) ? 'bg-[var(--color-yellow)]' : 'bg-[var(--color-silver)]'} hover:bg-[var(--color-yellow)]`}                >
                    <Icon
                        className={`w-4 h-4 fill-[var(--color-grey)] hover:fill-[var(--color-black-light)] `}
                        title={name}
                        fill={`${isActive(link)
                            ? '#18191A'
                            : '#767676'
                            }`}
                    />
                </Link>
            );
        })
    )
}
export default RightMenu;