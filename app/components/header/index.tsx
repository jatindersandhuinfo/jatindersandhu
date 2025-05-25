import React from 'react';
import RightMenu from "@/app/components/menu/right";
import { menuItems } from '@/lib/menuitems';
import ProfileCard from '@/app/components/card/profile';

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <>
            {/* Left Sidebar */}
            <aside className="w-[305px] flex-1 bg-white sticky">
                <ProfileCard />
            </aside>

            {/* Main Content */}
            <main className="flex-2 px-6 bg-gray-100" style={{ width: 'calc(100% - 415px)' }}>
                {children}
            </main>

            {/* Right Sidebar */}
            <aside className="w-[108px] flex-3 bg-white sticky">
                <div className="h-full flex flex-col items-center pt-20 pb-4">
                    <nav className="w-full px-4 mt-6 flex flex-col items-center justify-center gap-5">
                        <RightMenu items={menuItems} />
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Header;
