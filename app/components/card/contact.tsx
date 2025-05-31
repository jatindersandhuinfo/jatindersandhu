import type { ContactCardData } from "@/lib/type/contact";
import SingleContactCard from "@/app/components/card/ContactCardList";

interface Props {
  items: ContactCardData[];
}

const ContactCardList = ({ items }: Props) => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center max-w-2xl items-center mx-auto">
      {items.map((item, index) => (
        <SingleContactCard key={index} items={item.items} />
      ))}
    </div>
  );
};

export default ContactCardList;

