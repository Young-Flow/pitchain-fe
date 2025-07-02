import { BM } from 'src/types/bm';
import { InvestmentInfo } from 'src/types/investmentInfo';
import { Title, ImageDisplayer, Offers } from './';

interface HeaderProps {
  bmInfo: BM;
  investmentInfo: InvestmentInfo;
}

export default function Header({ bmInfo, investmentInfo }: HeaderProps) {
  const { title: title, logoImg: logo, subTitle: subTitle, ptImgResList: imageList } = bmInfo;
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <Title title={title} logo={logo} subTitle={subTitle} />
      </div>
      <div className="flex w-full justify-between pt-2">
        <ImageDisplayer images={imageList} />
        <Offers offerInfos={investmentInfo} />
      </div>
    </div>
  );
}
