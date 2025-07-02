interface TitleProps {
  title: string;
  logo: string;
  subTitle: string;
}

export default function Title({ title, logo, subTitle }: TitleProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-end">
        <div className="flex w-[136px] items-end justify-center">
          <img src={logo} className="h-[72px] object-contain" alt="로고" />
        </div>
        <h1 className="font-Paperlogy ml-3 line-clamp-1 max-w-[600px] text-[32px] leading-[50px] font-medium tracking-[0px] overflow-ellipsis">
          {title}
        </h1>
      </div>
      <div className="font-Paperlogy line-clamp-1 text-[18px] font-medium tracking-[0px] text-[#777]">{subTitle}</div>
    </div>
  );
}
