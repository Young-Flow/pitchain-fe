import { InvestmentInfo } from 'legacy/investmentInfo';
import { HTMLAttributes } from 'react';

interface InvestmentStatusProps extends HTMLAttributes<HTMLDivElement> {
  investmentInfo: InvestmentInfo;
  className?: string;
}

function StatusItem({ name, value }: { name: string; value: string | number }) {
  return (
    <li className="flex w-full items-center border-b-[1px] border-stone-200 py-3 text-base">
      <div className="font-Paperlogy font-medium text-stone-700">{name}</div>
      <div className="flex-1 text-right text-stone-900">{value}</div>
    </li>
  );
}

export default function InvestmentStatus({ investmentInfo, className, ...props }: InvestmentStatusProps) {
  const infosToDisplay = [
    {
      name: '투자 방식',
      value: '일반 주식',
    },
    {
      name: '주당 가격',
      value: `${Math.floor(investmentInfo.pricePerShare)} 원`,
    },
    { name: '목표 발행 주식', value: `${investmentInfo.maxIssuedShare} 주` },
    {
      name: '투자 목표액',
      value: `${Math.floor(investmentInfo.maximumInvestment)} 원`,
    },
    { name: '투자 기한', value: investmentInfo.deadline.format('YY.MM.DD') },
  ];

  const StatusItems = infosToDisplay.map((info) => <StatusItem key={info.name} {...info} />);

  return (
    <div className={`flex flex-col items-stretch ${className}`} {...props}>
      <h2 className="font-Paperlogy pb-2 text-xl font-semibold">투자 현황</h2>
      <ul>{StatusItems}</ul>
    </div>
  );
}
