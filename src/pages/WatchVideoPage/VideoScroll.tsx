import MiniBMBox from './MiniBMBox';
import usePitchList from '@hooks/usePitchList';

export default function VideoScroll() {
  const { pitchList } = usePitchList('ai');

  return (
    <div className="flex h-[404px] w-full flex-col gap-3 overflow-x-hidden overflow-y-hidden">
      {pitchList && pitchList.map((BMInfo) => <MiniBMBox key={BMInfo.bmId} BMInfo={BMInfo} />)}
    </div>
  );
}
