import React from 'react';
import RightMenu from "@/app/components/menu/right";
import ProfileCard from '@/app/components/card/profile';
import ProgressBarSection from '@/app/components/common/progress-bar';
import { languages, skills, personalInfo, profileDetail, social } from '@/lib/data/profile';
import Section from '@/app/components/common/section';
import InfoRow from '@/app/components/common/infoRow';
import Button from '@/app/components/button';
import DownloadSvg from '@/app/components/svg/download';
import Link from 'next/link';
import BreakLine from '@/app/components/svg/brakline';

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <>
            {/* Left Sidebar */}
            <aside className="relative xl:fixed w-full main-rightbar mx-4 md:mx-[1px] xl:w-[305px] left-0 bg-white h-full">
                <div className="w-full max-w-lg xl:max-w-sm mx-auto p-6 bg-white text-center ~">
                    {/* Profile Picture */}
                    <ProfileCard />
                    
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-3 mb-4">
                        {social && social.map(({ link, Icon }, idx) => (
                            <Link key={idx} href={link} target='_blank'><Icon width={`18px`} height={`18px`} /></Link>
                        ))}
                    </div>

                    <BreakLine width='270px'/>

                    {/* Personal Info */}
                    <div className="text-sm text-left space-y-2">
                        {personalInfo && personalInfo.map(({ label, value, valueColor }, idx) => (
                            <InfoRow
                                key={idx}
                                label={label}
                                value={value}
                                valueColor={valueColor}
                            />
                        ))}
                    </div>

                    <BreakLine width='270px'/>

                    {/* Languages */}
                    <Section title="Languages">
                        {languages && languages.map(({ skill, percent }, idx) => (
                            <ProgressBarSection key={idx} skill={skill} percent={percent} />
                        ))}
                    </Section>

                    <BreakLine width='270px'/>

                    {/* Skills */}
                    <Section title="Skills">
                        {skills && skills.map(({ skill, percent }, idx) => (
                            <ProgressBarSection key={idx} skill={skill} percent={percent} />
                        ))}
                    </Section>

                    <BreakLine width='270px'/>

                    {/* Download CV */}
                    <Link className='flex justify-center' href={profileDetail?.cv && profileDetail?.cv} download>
                        <Button title="DOWNLOAD CV" icon={<DownloadSvg className='text-left sm:text-center fill-[var(--color-black-dark)]' fill={`var(--color-black-dark)`} />} algin='right' />
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="relative xl:left-[305px] flex-2 mt-6 sm:mt-0 p-2 sm:px-6 bg-gray-100 main-responsive">
                {children}
            </main>

            {/* Right Sidebar */}
            <aside className="flex fixed main-sidebar right-0 bg-white h-full">
                <div className="h-full flex flex-col items-center pt-20 pb-4">
                    <nav className="w-full px-4 mt-6 flex flex-col items-center justify-center gap-5">
                        <RightMenu />
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Header;
