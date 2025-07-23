import { Link } from 'react-router';
import { ShortPitch } from 'src/types/legacy/shortpitch';

interface SmallVideoCardProps {
  videoInfo: ShortPitch;
}

export default function SmallVideoCard({ videoInfo }: SmallVideoCardProps) {
  const { bmId, thumbnailImg, title, avatar } = videoInfo;
  return (
    <Link to={`/watch?BMId=${bmId}`}>
      <article className="flex flex-col items-start rounded-[8px] bg-[#FFF]">
        <img src={thumbnailImg} className="h-[166px] w-[296px] rounded-[8px] object-cover object-center" />
        <div className="flex w-[296px] items-stretch py-2">
          <div className="flex h-[40px] w-[60px] shrink-0 py-[3px] pr-2">
            <img src={avatar} className="object-contain" />
          </div>
          <div className="line-clamp-2 flex-1 overflow-hidden pr-[8px] text-[14px]">{title}</div>
        </div>
      </article>
    </Link>
  );
}
