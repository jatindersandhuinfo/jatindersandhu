interface Props {
    Icon: React.ElementType;
    title: string;
    desc: string;
};

const ServiceCard = ({ Icon, title, desc }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center text-gray-900 bg-white dark:bg-gray-800 dark:text-white w-96 max-w-[330px] h-[225] ">
            <Icon width="68px" height="68px" fill={`var(--color-yellow)`} />
            <h3 className="text-lg mt-3 font-semibold">{title}</h3>
            <p className="font-light text-gray-500 text-base dark:text-gray-400">{desc}</p>
        </div>
    )
}
export default ServiceCard;