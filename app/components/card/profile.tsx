'use client';
import Image from 'next/image';
import ProgressBarSection from '@/app/components/common/progress-bar';
import { languages, skills, personalInfo } from '@/lib/profileData';
import Section from '@/app/components/common/section';
import InfoRow from '@/app/components/common/infoRow';
import Button from '@/app/components/button';
import DownloadSvg from '@/app/components/svg/download';


const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white text-center ">
      {/* Profile Picture */}
      <div className="relative w-32 h-32 mx-auto">
        <Image
          src="/profile.jpg" // Replace with your image path
          alt="Profile"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
      </div>

      {/* Name and Title */}
      <h2 className="text-xl font-semibold">Rayan Adlardard</h2>
      <p className="text-gray-500">Font-End Developer</p>

      {/* Social Icons */}
      {/* <div className="flex justify-center space-x-3 text-yellow-500">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
        <FaGithub />
        <FaYoutube />
      </div> */}

      {/* Personal Info */}
      <div className="text-sm text-left space-y-2">
        {personalInfo.map(({ label, value, valueColor }, idx) => (
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
        {languages.map(({ skill, percent }) => (
          <ProgressBarSection key={skill} skill={skill} percent={percent} />
        ))}
      </Section>

      {/* Skills */}
      <Section title="Skills">
        {skills.map(({ skill, percent }) => (
          <ProgressBarSection key={skill} skill={skill} percent={percent} />
        ))}
      </Section>

      {/* Download CV */}
      <a href="/jatinderCV.pdf" download>
        <Button title="DOWNLOAD CV" icon={<DownloadSvg />} algin='right' />
      </a>
    </div >
  );
};

export default ProfileCard;
