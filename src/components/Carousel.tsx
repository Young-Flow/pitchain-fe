import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { createContext, useContext, useRef, RefObject, ComponentProps, MouseEvent } from 'react';

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

Carousel.LeftButton = function LeftButton({ children, onClick, ...props }: ComponentProps<'button'>) {
  const sliderRef = useContext(sliderRefContext);
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const currentSlider = sliderRef?.current;
    if (onClick) onClick(e);
    if (!currentSlider || e.defaultPrevented) return;
    currentSlider.slickPrev();
  }
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

Carousel.RightButton = function RightButton({ children, onClick, ...props }: ComponentProps<'button'>) {
  const sliderRef = useContext(sliderRefContext);
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const currentSlider = sliderRef?.current;
    if (!currentSlider || e.defaultPrevented) return;
    currentSlider.slickNext();
    if (onClick) onClick(e);
  }
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
