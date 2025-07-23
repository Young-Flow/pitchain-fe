import { Link } from 'react-router';
import { useState } from 'react';
import { ShortPitch } from 'src/types/legacy/shortpitch';
import { VideoPlayer } from '@components/legacy/ui';

interface VideoCardProps {
  videoInfo: ShortPitch;
}

export default function VideoCard({ videoInfo }: VideoCardProps) {
  const { bmId, thumbnailImg, title, avatar, views, videoUrl } = videoInfo;

  const [showVideo, setShowVideo] = useState<boolean>(false);

  const handleMouseHover = () => {
    setShowVideo(true);
  };

  const handleMouseOut = () => {
    setShowVideo(false);
  };

  return (
    <Link to={`/watch/${bmId}`} state={{ videoInfo }}>
      <article
        className="relative flex flex-col items-stretch rounded-[8px] bg-[#FFF]"
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
      >
        <img
          src={thumbnailImg}
          className="h-[174px] w-[310px] rounded-[8px] object-cover object-center"
          alt="숏폼 썸네일"
        />
        <div className="flex items-stretch py-2">
          <div className="flex shrink-0 items-center pr-3">
            <div className="flex h-[40px] w-[60px] items-center">
              <img src={avatar} className="h-[40px] flex-shrink-0 object-contain" alt="로고" />
            </div>
          </div>
          <div className="flex max-w-[258px] flex-1 flex-col items-stretch justify-between">
            <div className="font-Paperlogy h-[18px] truncate text-[14px] font-semibold">{title}</div>
            <div className="text-text-secondary flex h-4 text-xs">
              <div>조회수 {views}회</div>
            </div>
          </div>
        </div>
        {showVideo && videoUrl !== '' && (
          <VideoPlayer src={videoUrl} className="absolute h-[176px] w-[311px] rounded-[8px]" controls={false} />
        )}
      </article>
    </Link>
  );
}
