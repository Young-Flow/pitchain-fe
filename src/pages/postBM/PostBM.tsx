import { ComponentProps } from 'react';
import Slider from '@components/Carousel';
import CategoryInput from '@components/BMPostInput/CategoryInput';

export default function PostBM() {
  return (
    <div className="flex flex-col items-stretch">
      <div className="flex flex-col px-[10%]">
        <div className="heading1 pb-24">BM 등록</div>
        <PostLabel>1. BM 분류 선택</PostLabel>
        <CategoryInput>
          <CategoryInput.GroupButtons />
        </CategoryInput>
      </div>
    </div>
  );
}

export function PostLabel(props: ComponentProps<'div'>) {
  return <div className="border-secondary-400 heading4 border-b-2 pb-6" {...props} />;
}
