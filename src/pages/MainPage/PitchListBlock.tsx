import { ReactNode } from 'react';
import { ShortPitch } from 'src/types/legacy/shortpitch';
import { VideoCard } from './';

interface PitchListBlockProps {
  mainPitchList: ShortPitch[];
  blockEnd: ReactNode;
}

export default function PitchListBlock({ mainPitchList, blockEnd }: PitchListBlockProps) {
  return (
    <div className="flex w-full flex-col pb-[88px]">
      <ul className="flex flex-wrap gap-[29.3px] gap-y-[88px]">
        {mainPitchList.map((videoInfo) => (
          <li key={videoInfo.bmId}>
            <VideoCard videoInfo={videoInfo} />
          </li>
        ))}
      </ul>
      {blockEnd}
    </div>
  );
}
