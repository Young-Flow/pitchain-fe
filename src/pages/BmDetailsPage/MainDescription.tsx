import { InvestmentInfo } from 'src/types/investmentInfo';
import { CommentInput, CommentList, SectionTitle, Aside, Description } from './';

interface MainDescriptionProps {
  investmentInfo: InvestmentInfo;
  descriptionContent: {
    description: string;
    descriptionImg: string;
  };
}

export default function MainDescription({ investmentInfo, descriptionContent }: MainDescriptionProps) {
  return (
    <div className="flex self-stretch pt-[80px]">
      <div className="flex w-[806px] flex-col">
        <Description content={descriptionContent} />
        <div className="flex w-full flex-col">
          <SectionTitle title="피드백" />
          <CommentInput />
          <CommentList />
        </div>
      </div>
      <div className="relative flex-1 self-stretch">
        <div className="sticky top-[40px] flex w-full items-center justify-center">
          <Aside investmentInfo={investmentInfo} />
        </div>
      </div>
    </div>
  );
}
