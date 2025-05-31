import { ContactItem } from "@/lib/type/contact";
import Link from "next/link";

interface Props {
    items: ContactItem[];
}

const SingleContactCard = ({ items }: Props) => {
    return (
        items.map(({ label, value, SvgIcon, color }, index) => (
            <Link key={index} href={value} target="_blank" className="text-white" >
                <div className="flex flex-col justify-center items-center w-20 h-28 sm:w-28 sm:h-32 2xl:w-32 2xl:h-32  p-4 rounded-md" style={{ backgroundColor: color }}>
                    {SvgIcon && <SvgIcon className="md:w-10 md:h-10 w-8 h-8 text-white fill-white" />}
                    {label}
                </div>
            </Link>
        ))
    );
};

export default SingleContactCard;
