import { useRef, useState } from 'react';
import { RillControlButton as ControlButton } from '@components/legacy/ui';

export default function ImageDisplayer({ images }: { images: { id: number; src: string }[] }) {
  const imageList = images.length !== 0 ? [...images] : [{ id: 0, src: 'https://placehold.co/600x400' }];
  if (imageList.length === 0) return;
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [anchoredIndex, setAnchoredIndex] = useState<number>(0);
  const reelRef = useRef<HTMLDivElement>(null);

  function checkIndex(index: number) {
    let fixedIndex = index;
    if (fixedIndex < 0) fixedIndex = 0;
    if (fixedIndex > imageList.length - 1) fixedIndex = imageList.length - 1;
    return fixedIndex;
  }

  function moveScrollTo(index: number) {
    if (reelRef.current === null) return;
    const targetIndex = Math.min(checkIndex(index), imageList.length - 4);
    setAnchoredIndex(targetIndex);
    reelRef.current.scroll({
      top: 0,
      left: 166 * targetIndex,
      behavior: 'smooth',
    });
  }

  function selectItem(index: number) {
    if (reelRef.current === null) return;
    const targetIndex = checkIndex(index);
    setFocusedIndex(targetIndex);
    moveScrollTo(targetIndex);
  }

  return (
    <div className="relative flex w-[758px] flex-col">
      <div className="flex h-[426px] w-full items-center justify-center">
        <img
          src={imageList[focusedIndex].src || imageList[0].src}
          className="h-full w-full rounded-[12px] object-cover"
        />
      </div>
      {focusedIndex !== 0 && (
        <ControlButton
          direction="left"
          className="prevItem top-[192px] -left-[30px]"
          onClick={() => {
            selectItem(focusedIndex - 1);
          }}
        />
      )}
      {focusedIndex !== imageList.length - 1 && (
        <ControlButton
          direction="right"
          className="nextItem top-[192px] left-[746px]"
          onClick={() => {
            selectItem(focusedIndex + 1);
          }}
        />
      )}
      <div className="relative">
        <div ref={reelRef} className="relative flex h-[105px] w-[758px] gap-[18px] overflow-hidden pt-[21px]">
          {imageList.map((image, index) => (
            <div
              key={`i${index}`}
              className={`m-0 h-[84px] w-[148px] flex-shrink-0 overflow-hidden rounded-[8px] border-[3px] transition-colors ${focusedIndex === index ? 'border-secondary' : 'border-transparent'}`}
              onClick={() => selectItem(index)}
            >
              <img src={image.src} className={`h-full w-full object-cover`} />
            </div>
          ))}
        </div>
        {anchoredIndex > 0 && (
          <ControlButton
            direction="left"
            className="scrollLeft top-[40px] -left-[30px]"
            onClick={() => {
              moveScrollTo(anchoredIndex - 2);
            }}
          />
        )}
        {anchoredIndex < imageList.length - 4 && (
          <ControlButton
            direction="right"
            className="scrollRight top-[40px] left-[746px]"
            onClick={() => {
              moveScrollTo(anchoredIndex + 2);
            }}
          />
        )}
      </div>
    </div>
  );
}
