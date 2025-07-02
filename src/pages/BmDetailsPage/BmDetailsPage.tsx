import { useParams } from 'react-router';
import useBMDetail from '@hooks/useBMDetail';
import { Header, MainDescription } from './';

export default function BmDetailsPage() {
  const bmId: number = Number(useParams().BMId);
  const { bmInfo, investmentInfo } = useBMDetail(bmId);
  const descriptionContent = {
    description: bmInfo.description,
    descriptionImg: bmInfo.descriptionImg,
  };

  return (
    <div className="flex w-full flex-col">
      <section className="flex flex-col items-stretch px-[392px] pt-28">
        <Header bmInfo={bmInfo} investmentInfo={investmentInfo} />
        <MainDescription investmentInfo={investmentInfo} descriptionContent={descriptionContent} />
      </section>
    </div>
  );
}
