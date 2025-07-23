import { ReactNode, useRef, useState, HTMLAttributes } from 'react';
import { RillControlButton as ControlButton } from '@components/legacy/ui';

interface VideoRillProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxIndex: number;
  indexPerClick: number;
  widthPerIndex: number;
}

export default function VideoRill({
  children,
  maxIndex,
  indexPerClick,
  widthPerIndex,
  className,
  ...props
}: VideoRillProps) {
  const [anchoredIndex, setAnchoredIndex] = useState<number>(0);
  const reelRef = useRef<HTMLDivElement>(null);

  function checkIndexValidation(index: number) {
    let fixedIndex = Math.min(index, maxIndex);
    if (index < 0) fixedIndex = 0;
    return fixedIndex;
  }

  function moveScrollTo(index: number) {
    console.log('called');
    if (reelRef.current === null) return;
    const targetIndex = checkIndexValidation(index);
    setAnchoredIndex(targetIndex);
    reelRef.current.scroll({
      top: 0,
      left: widthPerIndex * targetIndex,
      behavior: 'smooth',
    });
  }

  const handleScrollLeft = () => moveScrollTo(anchoredIndex - indexPerClick);
  const handleScrollRight = () => moveScrollTo(anchoredIndex + indexPerClick);

  const [isHoveringLeft, setIsLeftHovering] = useState<boolean>(false);
  const handleLeftMouseOver = () => setIsLeftHovering(true);
  const handleLeftMouseOut = () => setIsLeftHovering(false);

  const [isHoveringRight, setIsRightHovering] = useState<boolean>(false);
  const handleRightMouseOver = () => setIsRightHovering(true);
  const handleRightMouseOut = () => setIsRightHovering(false);

  return (
    <div className="relative">
      <div ref={reelRef} className={`relative flex gap-[18px] overflow-hidden ${className}`} {...props}>
        {children}
      </div>
      <div
        onMouseEnter={handleLeftMouseOver}
        onMouseLeave={handleLeftMouseOut}
        className={`absolute top-0 h-full w-[80px] ${isHoveringLeft && anchoredIndex > 1 && 'bg-gradient-to-l from-transparent to-white/50'}`}
      >
        {isHoveringLeft && anchoredIndex > 1 && (
          <ControlButton
            direction="left"
            className="scrollLeft absolute top-[98px] -left-[24px] z-11"
            onClick={handleScrollLeft}
          />
        )}
      </div>
      <div
        onMouseEnter={handleRightMouseOver}
        onMouseLeave={handleRightMouseOut}
        className={`absolute top-0 right-0 h-full w-[80px] ${isHoveringRight && anchoredIndex < maxIndex && 'bg-gradient-to-r from-transparent to-white/50'}`}
      >
        {isHoveringRight && anchoredIndex < maxIndex && (
          <ControlButton
            direction="right"
            className="scrollRight absolute top-[98px] -right-[24px] z-11"
            onClick={handleScrollRight}
          />
        )}
      </div>
    </div>
  );
}
