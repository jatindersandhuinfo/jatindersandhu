'use client';
import Image from 'next/image';
import ProgressBarSection from '@/app/components/common/progress-bar';
import { languages, skills, personalInfo, profileDetail, social } from '@/lib/profileData';
import Section from '@/app/components/common/section';
import InfoRow from '@/app/components/common/infoRow';
import Button from '@/app/components/button';
import DownloadSvg from '@/app/components/svg/download';
import Link from 'next/link';


const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white text-center ~">
      {/* Profile Picture */}
      <div className="relative w-32 h-32 mx-auto bg-[var(--color-silver)] rounded-full">
        <Image
          src="/profile.png" // Replace with your image path
          alt="Profile"
          fill
          priority
          sizes="300px"
          className="object-cover rounded-full "
        />
        <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
      </div>

      {/* Name and Title */}
      <h2 className="text-xl font-semibold">{profileDetail?.name ?? ''}</h2>
      <p className="text-gray-500">{profileDetail?.role ?? ''}</p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-3 mb-4">
        {social && social.map(({ link, Icon }, idx) => (
          <Link key={idx} href={link} target='_blank'><Icon width={`18px`} height={`18px`} /></Link>
        ))}

      </div>

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

      {/* Languages */}
      <Section title="Languages">
        {languages && languages.map(({ skill, percent }, idx) => (
          <ProgressBarSection key={idx} skill={skill} percent={percent} />
        ))}
      </Section>

      {/* Skills */}
      <Section title="Skills">
        {skills && skills.map(({ skill, percent }, idx) => (
          <ProgressBarSection key={idx} skill={skill} percent={percent} />
        ))}
      </Section>

      {/* Download CV */}
      <a href={profileDetail?.cv && profileDetail?.cv} download>
        <Button title="DOWNLOAD CV" icon={<DownloadSvg />} algin='right' />
      </a>
    </div >
  );
};

export default ProfileCard;
