import { social } from '@/lib/data/profile';
import Link from 'next/link';

const Footer = () => {
     const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col space-y-10 justify-center p-10 w-full bg-[var(--color-white)]">

            <div className="flex justify-center space-x-5">
                {social && social.map(({ link, Icon }, idx) => (
                    <Link key={idx} href={link} target='_blank'><Icon width={`18px`} height={`18px`} /></Link>
                ))}
            </div>
            <p className="text-center text-gray-700 font-medium">{`© 2020 – ${currentYear} Jatinder Sandhu – Full Stack Developer. All rights reserved.`}</p>
        </footer>
    )
}
export default Footer;