import { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { ShortPitch } from 'src/types/shortpitch';
import { getShortPitchList } from '@api/getShortPitch';
import { AttentionTimeRecorder } from '@components/legacy/observer';
import { MainVideoPlayer } from './';

export default function WatchVideoPage() {
  const { initialShortPitch: initIdParam } = useParams<{
    initialShortPitch: string;
  }>();
  const initId = parseInt(initIdParam ?? '0');

  const { data: reservePitchList, isLoading } = useQuery<ShortPitch[]>({
    queryKey: ['pitchList'],
    queryFn: async () => await getShortPitchList(),
    staleTime: 1000 * 10,
  });

  function makePlayList() {
    if (!reservePitchList) return null;
    let newList: ShortPitch[] = [...reservePitchList];
    const initVideoInfo = newList.find((pitchInfo) => pitchInfo.bmId === initId);
    newList = newList.filter((pitchInfo) => pitchInfo.bmId !== initId);
    if (initVideoInfo) newList.unshift(initVideoInfo);
    return newList;
  }

  const playList: ShortPitch[] | null = makePlayList();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentVideo = playList ? playList[currentIndex] : null;

  function toNextVideo() {
    if (!playList) return;
    if (currentIndex + 1 !== playList.length) setCurrentIndex((idx) => idx + 1);
  }

  function toPrevVideo() {
    if (!playList) return;
    if (currentIndex !== 0) setCurrentIndex((idx) => idx - 1);
  }

  let prevImage,
    nextImage = null;
  if (playList && currentIndex !== 0) prevImage = playList[currentIndex - 1].thumbnailImg;
  if (playList && currentIndex + 1 !== playList.length) nextImage = playList[currentIndex + 1].thumbnailImg;

  return (
    <div className="relative h-[1050px] w-full overflow-hidden pl-[232px]">
      <AttentionTimeRecorder>
        <MainVideoPlayer videoInfo={currentVideo} videoInfoLoading={isLoading || !playList} />
        {prevImage && (
          <button
            onClick={toPrevVideo}
            className="absolute top-0 z-20 flex h-[56px] w-[1228px] justify-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-full w-full from-transparent to-white/50 hover:bg-gradient-to-t" />
            <img src={prevImage} className="h-[56px] w-[1000px] rounded-b-[16px] object-cover object-bottom" />
          </button>
        )}
        {nextImage && (
          <button
            onClick={toNextVideo}
            className="absolute bottom-[0px] z-20 flex h-[130px] w-[1228px] justify-center overflow-hidden bg-gradient-to-b from-transparent to-white/50"
          >
            <div className="absolute top-0 left-0 h-full w-full from-transparent to-white/50 ease-in-out hover:bg-gradient-to-b" />
            <img
              src={nextImage}
              className="border-#EEEEEE h-[560px] w-[1000px] rounded-[16px] border-[1px] object-cover"
            />
          </button>
        )}
      </AttentionTimeRecorder>
    </div>
  );
}
