interface Props {
    Icon: React.ElementType;
    title: string;
    desc: string;
};

const ServiceCard = ({ Icon, title, desc }: Props) => {
    return (
        <div className="flex flex-col p-10 justify-center items-center max-w-lg text-gray-900 bg-white  dark:bg-gray-800 dark:text-white w-[310px] h-[225] ">
            <Icon width="68px" height="68px" fill={`var(--color-yellow)`} />
            <h3 className="text-lg mt-3 font-semibold">{title}</h3>
            <p className="font-light text-gray-500 text-base dark:text-gray-400">{desc}</p>
        </div>
    )
}
export default ServiceCard;