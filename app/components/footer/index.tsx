const Footer = () => {
     const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col space-y-10 justify-center p-10 w-full bg-[var(--color-white)]">
            <p className="text-center text-gray-700 font-medium">{`© 2020 – ${currentYear} Jatinder Sandhu – Full Stack Developer. All rights reserved.`}</p>
        </footer>
    )
}
export default Footer;