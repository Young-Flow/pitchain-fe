import { VideoPlayer } from '@components/legacy/ui';
import VideoMetaData from './VideoMetaData';
import { InvestmentStatus } from '@components/legacy/investmentInfo';
import Comments from './Comments';
import VideoScroll from './VideoScroll';
import usePitchInfo from '@hooks/usePitchInfo';
import { SkeletonComponent, SkeletonProvider } from '@components/legacy/skeleton';
import { ShortPitch } from 'src/types/shortpitch';

interface MainVideoPlayerProps {
  videoInfo: ShortPitch | null;
  videoInfoLoading: boolean;
}

export default function MainVideoPlayer({ videoInfo, videoInfoLoading }: MainVideoPlayerProps) {
  if (!videoInfo) return <div />;
  const {
    comments,
    investmentInfo,
    isLoading: subInfoLoading,
  } = usePitchInfo({
    pitchId: videoInfo.bmId,
  });
  return (
    <div className="flex h-full w-full bg-white">
      <div className="flex h-[955px] w-[1228px] flex-shrink-0 items-center justify-center">
        <div className="mt-[131px] flex flex-col self-stretch">
          <SkeletonProvider skeleton={VideoPlayerSkeleton} isLoading={!videoInfo || videoInfoLoading}>
            <VideoPlayer
              src={videoInfo.videoUrl}
              poster={videoInfo.thumbnailImg}
              className="h-[652px] w-[1162px] rounded-[24px]"
            />
          </SkeletonProvider>
          <SkeletonProvider skeleton={VideoMetaDataSkeleton} isLoading={subInfoLoading}>
            <VideoMetaData
              title={videoInfo.title}
              channel={videoInfo.company}
              views={videoInfo.views}
              avatar={videoInfo.avatar}
              bmId={videoInfo.bmId}
            />
          </SkeletonProvider>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="mt-[56px] flex w-[406px] flex-shrink-0 flex-col justify-start rounded-2xl border-[1px] border-stone-300 p-6">
          <SkeletonProvider skeleton={InvestmentStatusSkeleton} isLoading={subInfoLoading}>
            <InvestmentStatus investmentInfo={investmentInfo} />
          </SkeletonProvider>
          <SkeletonProvider skeleton={CommentSkeleton} isLoading={subInfoLoading}>
            <Comments comments={comments} />
          </SkeletonProvider>
          <SkeletonProvider skeleton={VideoScrollSkeleton} isLoading={subInfoLoading}>
            <VideoScroll />
          </SkeletonProvider>
        </div>
      </div>
    </div>
  );
}

const VideoPlayerSkeleton = <SkeletonComponent className="h-[652px] w-[1162px] rounded-[24px]" />;

const VideoMetaDataSkeleton = (
  <div className="flex w-[1162px] py-2">
    <div className="flex items-center justify-center">
      <SkeletonComponent className="h-[72px] w-[72px] rounded-[36px]" />
    </div>
    <div className="flex flex-1 flex-col justify-between py-1 pl-3">
      <SkeletonComponent className="h-4 w-[280px] rounded-[8px]" />
      <SkeletonComponent className="h-4 w-[200px] rounded-[8px]" />
      <SkeletonComponent className="h-4 w-[160px] rounded-[8px]" />
    </div>
    <div className="flex h-[72px] flex-shrink-0 items-center gap-4">
      <SkeletonComponent className="h-[52px] w-[123px] rounded-[8px]" />
    </div>
  </div>
);

const InvestmentStatusSkeleton = (
  <div className="flex flex-col gap-2">
    <SkeletonComponent className="flex h-7 w-[80px] flex-col rounded-[8px]" />
    <div className="flex flex-col gap-[25px] py-3">
      <SkeletonComponent className="h-6 w-[356] rounded-[8px]" />
      <SkeletonComponent className="h-6 w-[356] rounded-[8px]" />
      <SkeletonComponent className="h-6 w-[356] rounded-[8px]" />
      <SkeletonComponent className="h-6 w-[356] rounded-[8px]" />
      <SkeletonComponent className="h-6 w-[356] rounded-[8px]" />
    </div>
  </div>
);

const CommentSkeleton = <SkeletonComponent className="my-3 h-[122px] w-[356px] rounded-[8px]" />;

const VideoScrollSkeleton = (
  <div className="flex h-[404px] flex-col items-stretch gap-3 overflow-hidden">
    <div className="flex justify-between">
      <SkeletonComponent className="h-[98px] w-[168px] rounded-[8px]" />
      <div className="flex flex-col gap-2">
        <SkeletonComponent className="h-[20px] w-[162px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[102px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[142px] rounded-[8px]" />
      </div>
    </div>
    <div className="flex justify-between">
      <SkeletonComponent className="h-[98px] w-[168px] rounded-[8px]" />
      <div className="flex flex-col gap-2">
        <SkeletonComponent className="h-[20px] w-[162px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[102px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[142px] rounded-[8px]" />
      </div>
    </div>
    <div className="flex justify-between">
      <SkeletonComponent className="h-[98px] w-[168px] rounded-[8px]" />
      <div className="flex flex-col gap-2">
        <SkeletonComponent className="h-[20px] w-[162px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[102px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[142px] rounded-[8px]" />
      </div>
    </div>
    <div className="flex justify-between">
      <SkeletonComponent className="h-[98px] w-[168px] rounded-[8px]" />
      <div className="flex flex-col gap-2">
        <SkeletonComponent className="h-[20px] w-[162px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[102px] rounded-[8px]" />
        <SkeletonComponent className="h-[20px] w-[142px] rounded-[8px]" />
      </div>
    </div>
  </div>
);
