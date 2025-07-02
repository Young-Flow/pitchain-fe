import { ComponentProps } from 'react';
import { useNavigate, useParams } from 'react-router';
import { InvestmentInfo } from 'src/types/investmentInfo';

interface ItemProps extends ComponentProps<'div'> {
  title: string;
  value: string | number;
}

function Item({ title, value, children, ...props }: ItemProps) {
  return (
    <div className="mb-[30px] flex flex-col" {...props}>
      <div>
        <div className="font-Paperlogy text-[28px] leading-[32px] font-medium tracking-[0px]">{value}</div>
        <div className="text-[18px] leading-[32px] font-medium tracking-[0px] text-[#777]">{title}</div>
      </div>
      {children}
    </div>
  );
}

interface OffersProps {
  offerInfos: InvestmentInfo;
}

export default function Offers({ offerInfos }: OffersProps) {
  const { BMId: bmId } = useParams<{ BMId: string }>();
  const navigate = useNavigate();
  function handleConfirm() {
    navigate(`/payment/${bmId}`);
  }
  return (
    <div className="flex w-[332px] flex-col items-stretch px-4">
      <Item title={`최대 모금액 ${offerInfos.investmentGoal}`} value={`$${offerInfos.investmentSum}`} />
      <Item title="투자자 수" value={offerInfos.investorCount} />
      <Item title="마감기한" value={offerInfos.deadline.format('YY.MM.DD')} />
      <div className="flex flex-1 flex-col items-center justify-end">
        <button
          onClick={handleConfirm}
          className="bg-primary flex w-full items-center justify-center rounded-[16px] p-[8px] text-[18px] leading-[32px] font-medium text-[#FFF]"
        >
          투자하기
        </button>
        <div className="h-[32px] self-stretch p-2 text-center text-[14px] font-medium text-[#777]">
          최소 투자액 ${offerInfos.minimumInvestment}
        </div>
      </div>
    </div>
  );
}
