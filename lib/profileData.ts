import Github from '@/app/components/svg/github';
import LinkedSvg from '@/app/components/svg/linked';
import MailSvg from '@/app/components/svg/mail';


export const profileDetail = {
    name: 'Jatinder Sandhu',
    role: 'Full-Stack Devloper',
    cv: '/jatinderCV.pdf'
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
