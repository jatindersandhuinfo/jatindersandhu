import type { ContactCardData } from "@/lib/type/contact";
import SingleContactCard from "@/app/components/card/ContactCardList";

interface Props {
  items: ContactCardData[];
}

const ContactCardList = ({ items }: Props) => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-auto gap-6 justify-center items-center w-full">
      {items.map((item, index) => (
        <SingleContactCard key={index} items={item.items} />
      ))}
    </div>
  );
};

export default ContactCardList;

