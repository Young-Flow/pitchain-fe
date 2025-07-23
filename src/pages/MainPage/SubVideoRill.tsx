import { MouseEvent, FunctionComponent, SVGProps } from 'react';
import usePitchList from '@hooks/legacy/usePitchList';
import { SubContentLabel, VideoRill, SmallVideoCard } from './';

interface SubVideoRillProps {
  title: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  category: string;
  onExtraButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

export default function SubVideoRill({ title, icon, category, onExtraButtonClick, className }: SubVideoRillProps) {
  const { pitchList } = usePitchList(category);

  return (
    <SubContentLabel title={title} icon={icon} onExtraButtonClick={onExtraButtonClick} className={className}>
      {pitchList && (
        <VideoRill maxIndex={pitchList.length - 4} indexPerClick={2} widthPerIndex={314} className="pt-3">
          {pitchList.map((videoInfo) => (
            <SmallVideoCard key={videoInfo.bmId} videoInfo={videoInfo} />
          ))}
        </VideoRill>
      )}
    </SubContentLabel>
  );
}
