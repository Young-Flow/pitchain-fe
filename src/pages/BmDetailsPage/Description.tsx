import { useEffect, useRef, useState } from 'react';
import { FoldArrow } from '@assets/icons';
import { SectionTitle } from './';

interface DescriptionProps {
  content: {
    description: string;
    descriptionImg?: string;
  };
}

const DEFAULT_IMG_URL = 'https://picsum.photos/200/300';

export default function Description({ content }: DescriptionProps) {
  const descRef = useRef<HTMLDivElement>(null);
  const [descriptionImageLoaded, setDescriptionImageLoaded] = useState<boolean>(false);
  const [activateHideButton, setActivateHideButton] = useState<boolean>(false);
  const [hideOverflow, setHideOverflow] = useState<boolean>(false);

  useEffect(() => {
    if (descRef.current && descriptionImageLoaded) {
      const descriptionHeight = descRef.current.offsetHeight;
      if (descriptionHeight > 640) {
        setActivateHideButton(true);
        setHideOverflow(true);
      }
    }
  }, [content.description, descriptionImageLoaded]);

  function handleImageLoaded() {
    if (content.descriptionImg !== DEFAULT_IMG_URL) setDescriptionImageLoaded(true);
  }

  function handleHideButtonClick() {
    setHideOverflow((hideOverflow) => !hideOverflow);
  }

  return (
    <div className="mb-[80px] flex flex-col">
      <SectionTitle title="개요" />
      <div className="relative">
        <div ref={descRef} className={`flex flex-col pb-[60px] ${hideOverflow && 'h-[640px] overflow-hidden'}`}>
          <div className="mb-4 flex w-full justify-center">
            {content.descriptionImg && <img onLoad={handleImageLoaded} src={content.descriptionImg} />}
          </div>
          {content.description}
        </div>
        {activateHideButton && (
          <button
            onClick={handleHideButtonClick}
            className="border-b-primary absolute bottom-0 flex h-12 w-full justify-center border-b-[3px]"
          >
            <div className="relative">
              <div className="absolute top-6 -left-3 flex h-10 w-10 items-center justify-center rounded-[20px] border-[1px] bg-white drop-shadow-md">
                <FoldArrow className={`h-[24px] w-[24px] ${hideOverflow && 'rotate-180'}`} />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
