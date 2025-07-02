interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-[48px] flex w-full flex-col items-center">
      <h3 className="font-Paperlogy text-[25px] leading-[28px] font-medium">{title}</h3>
      <div className="mt-[16px] h-[3px] w-[150px] bg-[#9CDBA6]" />
    </div>
  );
}
