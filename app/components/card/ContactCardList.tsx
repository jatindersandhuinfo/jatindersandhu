import { ContactItem } from "@/lib/type/contact";
import Link from "next/link";

interface Props {
    items: ContactItem[];
}

const SingleContactCard = ({ items }: Props) => {
    return (
        items.map(({ label, value, SvgIcon, color }, index) => (
            <Link key={index} href={value} target="_blank" className="text-white" >
                <div className="flex flex-col justify-center items-center w-36 h-36 p-4 rounded-md" style={{ backgroundColor: color }}>
                    {SvgIcon && <SvgIcon className="w-14 h-14 text-white fill-white" />}
                    {label}
                </div>
            </Link>
        ))
    );
};

export default SingleContactCard;
