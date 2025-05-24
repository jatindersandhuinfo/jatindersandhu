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
            <aside className="w-1/12 flex-1 bg-white border-r border-gray-200">
                <ProfileCard />
            </aside>

            {/* Main Content */}
            <main className="w-10/12 flex-2 p-6 bg-gray-100">
                {children}
            </main>

            {/* Right Sidebar */}
            <aside className="w-24 flex-3 bg-white border-l border-gray-200">
                <div className="h-full flex flex-col items-center py-4">
                    <nav className="w-full px-4 mt-6 flex flex-col items-center justify-center gap-5">
                        <RightMenu items={menuItems} />
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Header;
