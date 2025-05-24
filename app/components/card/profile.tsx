'use client';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md text-center space-y-4">
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
        <InfoRow label="Age" value="24" />
        <InfoRow label="Residence" value="BD" />
        <InfoRow label="Freelance" value="Available" valueColor="text-green-500" />
        <InfoRow label="Address" value="Dhaka, Bangladesh" />
      </div>

      {/* Languages */}
      <Section title="Languages">
        <Progress label="Bangla" value={100} />
        <Progress label="English" value={80} />
        <Progress label="Spanish" value={60} />
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <Progress label="Html" value={90} />
        <Progress label="CSS" value={85} />
        <Progress label="Js" value={80} />
        <Progress label="PHP" value={75} />
        <Progress label="WordPress" value={85} />
      </Section>

      {/* Extra Skills */}
      <Section title="Extra Skills">
        <ul className="space-y-2 text-left text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">▣</span> Bootstrap, Materialize
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">▣</span> Stylus, Sass, Less
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">▣</span> Gulp, Webpack, Grunt
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">▣</span> GIT Knowledge
          </li>
        </ul>
      </Section>

      {/* Download CV */}
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 mt-4 rounded-md flex items-center justify-center gap-2">
        DOWNLOAD CV <span className="text-xl">⬇</span>
      </button>
    </div>
  );
};

const InfoRow = ({
  label,
  value,
  valueColor = '',
}: {
  label: string;
  value: string;
  valueColor?: string;
}) => (
  <div className="flex justify-between">
    <span className="text-sm bg-yellow-400 px-2 rounded">{label}:</span>
    <span className={`ml-2 ${valueColor}`}>{value}</span>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const Progress = ({ label, value }: { label: string; value: number }) => (
  <div className="mb-2">
    <div className="flex justify-between mb-1 text-sm">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-1 bg-yellow-200 rounded">
      <div className="h-1 bg-yellow-500 rounded" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default ProfileCard;
