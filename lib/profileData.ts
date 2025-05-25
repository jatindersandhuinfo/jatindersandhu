import Github from '@/app/components/svg/github';
import LinkedSvg from '@/app/components/svg/linked';
import MailSvg from '@/app/components/svg/mail';

export const profileDetail = {
    name: 'Jatinder Sandhu',
    role: 'Full-Stack Devloper',
    desc: "I&rsquo;m Jatinder Sandhu, an experienced Full Stack Developer with 4+ years of experience in PHP, React, Node.js, Laravel, and WordPress. I have a great gift for construction. Our focus is on developing scalable web apps with good speed. I stay current with technology and adhere to industry standards in my delivery. I have gained experience with complicated web development projects, API connections, and responsive front-end designs.",
    cv: '/jatinderCV.pdf'
};

export const Banner = {
    name: 'Jatinder Sandhu',
    role: 'Full-Stack',
    desc: "I&rsquo;m a Full-Stack Web Developer with over 5 years of experience in building scalable and high-performance web applications using PHP, React.js, Node.js, Laravel, and WordPress. I specialize in both front-end and back-end development, delivering responsive designs and secure, optimized solutions.",
    descOne: "My expertise includes developing complex systems with custom API integrations, user-friendly interfaces, and efficient backend architectures. I follow industry best practices and stay up-to-date with modern technologies to deliver clean, maintainable code that meets client and business needs.",
};

export const social = [
    { link: 'https://www.linkedin.com/in/jatindersandhuinfo/', Icon: LinkedSvg },
    { link: 'jatinderinfo@gmail.com', Icon: MailSvg },
    { link: "https://github.com/jatindersandhuinfo", Icon: Github },
];

export const languages = [
    { skill: 'Punjabi', percent: '100' },
    { skill: 'Hindi', percent: '80' },
    { skill: 'English', percent: '70' },
];

export const skills = [
    { skill: 'PHP', percent: '90' },
    { skill: 'React Js', percent: '75' },
    { skill: 'Next Js', percent: '70' },
    { skill: 'Node Js', percent: '70' },
];

export const groupedExtraSkills = [
    {
        title: 'Technology',
        skills: ['WordPress', 'Laravel', 'Shopify'],
    },
    {
        title: 'Databases',
        skills: ['MongoDB', 'MySQL', 'MyPostqulSQL', 'Firebase'],
    },
    {
        title: 'CSS & Styling',
        skills: ['Bootstrap', 'Tailwind CSS', 'Sass'],
    },
    {
        title: 'JavaScript Libraries',
        skills: ['jQuery'],
    },
    {
        title: 'Version Control & Hosting',
        skills: ['Git Hub', 'AWS', 'Digital oceon'],
    },
    {
        title: 'Web APIs',
        skills: ['REST API'],
    },
];


export const personalInfo = [
    { label: 'Age', value: '31' },
    { label: 'Freelance', value: 'Available', valueColor: 'text-green-500' },
    { label: 'Address', value: 'Bathinda, Punjab, India' },
];
