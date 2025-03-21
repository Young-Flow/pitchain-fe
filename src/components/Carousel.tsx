import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { createContext, useContext, useRef, RefObject, ComponentProps } from 'react';
import Clickable from '@components/Clickable/Clickable';

const sliderRefContext = createContext<RefObject<Slider | null> | null>(null);

//TODO: 버튼 배경, 버튼 컴포넌트 작성
//TODO: Nav 컴포넌트 작성
export default function Carousel({ ...props }: Settings) {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <sliderRefContext.Provider value={sliderRef}>
      <div>
        <Slider {...props} />
      </div>
    </sliderRefContext.Provider>
  );
}

Carousel.LeftButton = function LeftButton({ children, ...props }: ComponentProps<'button'>) {
  const sliderRef = useContext(sliderRefContext);
  function handleClick() {
    if (sliderRef === null) return;
    sliderRef.current.slickPrev();
  }
  return <Clickable {...props}>{children}</Clickable>;
};
