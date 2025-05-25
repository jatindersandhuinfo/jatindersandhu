import type { InfoProps } from '@/lib/type/info';

const InfoCard = ({ type, title, date, subtitle, desc }: InfoProps) => {

  return (
    <>
      <div className="flex w-full border-b py-10 border-[var(--color-silver)] last:border-b-0" >
        <div className='w-2/6'>
          <h3 className="text-[var(--color-balck-dark)] text-lg font-semibold mb-2">{title}</h3>
          <p className='text-sm text-[var(--color-grey)]'> {type === "edu" ? "Student" : "Employee"} <span className="text-sm text-[var(--color-balck-dark)] bg-[var(--color-yellow)] px-3 py-0.5" >{date}</span></p>
        </div>
        <div className='w-4/6'>
          <h3 className="text-[var(--color-balck-dark)] text-lg font-semibold mb-2">{subtitle}</h3>
          <p className='text-sm text-[var(--color-grey)]'>{desc}</p>
        </div>
      </div >
    </>
  );
};

export default InfoCard;
