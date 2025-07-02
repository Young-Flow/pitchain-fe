import { ComponentProps } from 'react';
import { InvestmentInfo } from 'src/types/investmentInfo';
import { InvestmentStatus } from '@components/legacy/investmentInfo';

interface AsideProps extends ComponentProps<'div'> {
  investmentInfo: InvestmentInfo;
}

export default function Aside({ investmentInfo, className, ...props }: AsideProps) {
  return (
    <div className={`flex w-[322px] flex-col items-stretch p-[24px] ${className}`} {...props}>
      <InvestmentStatus investmentInfo={investmentInfo} />
    </div>
  );
}
