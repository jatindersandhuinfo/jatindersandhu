import { Banner } from '@/lib/data/banner';
import Button from '@/app/components/button';
import RightArrowSvg from '../svg/rightArrow';
import Image from 'next/image';
const BannerSection = ({ id }: { id: string }) => {
    return (
        <section id={id} className="flex flex-col md:flex-row items-center justify-between md:pl-20 pt-16 bg-white relative overflow-hidden w-full">
            {/* Text Content */}
            <div className="md:w-3/5 z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-balck-dark)] leading-tight">
                    I&rsquo;m <span className="text-[var(--color-balck-dark)]">{Banner?.name}</span><br />
                    <span className="text-[var(--color-yellow)]">{Banner?.role}</span>{" "}
                    <span className="text-[var(--color-balck-dark)]">Developer</span>
                </h1>
                <p className="text-[var(--color-grey)] mt-6 text-lg">{Banner?.desc}</p>
                <p className="text-[var(--color-grey)] mt-6 text-lg mb-2">{Banner?.descOne}</p>

                <Button width='130px' style={{ color: 'text-[var(--color-grey)]' }} title='HIRE ME' icon={<RightArrowSvg width='20px' />} />
            </div>

            {/* Image */}
            <div className="md:w-2/5 mt-10 md:mt-0 relative z-10 flex justify-end">
                <Image
                    src="/jatindersandhu.png"
                    alt="jatinder sandhu"
                    width={700}
                    height={900}
                    priority
                    className="w-full max-w-md"
                />
            </div>

            {/* Background geometric shapes (optional with absolute positioning) */}
            <div className="absolute top-6 left-6 w-4 h-4 border-2 border-[var(--color-yellow)] rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-[var(--color-green)] rounded-full"></div>
            <div className="absolute top-12 right-20 rotate-45 w-4 h-4 border-2 border-[var(--color-yellow)]"></div>
            <div className="absolute bottom-8 right-10 rotate-45 w-4 h-4 border-2 border-[var(--color-yellow)"></div>
        </section>
    )
}
export default BannerSection;