import { ShortPitch } from 'src/types/shortpitch';
import { Link } from 'react-router';

interface MiniBMBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  BMInfo: ShortPitch;
}

export default function MiniBMBox({ BMInfo, ...props }: MiniBMBoxProps) {
  const { bmId, thumbnailImg, title, company } = BMInfo;
  return (
    <Link to={`/watch/${bmId}`}>
      <div className="flex h-[98px] w-full flex-shrink-0" {...props}>
        <img src={thumbnailImg} className="h-full w-[168px] flex-shrink-0 rounded-lg" alt="썸네일" />
        <div className="flex flex-col items-stretch justify-between pl-2">
          <div className="w-min-0 font-Paperlogy line-clamp-3 h-[60px] w-[162px] text-sm overflow-ellipsis text-stone-900">
            {title}
          </div>
          <div className="text-xs text-stone-500">{company}</div>
        </div>
      </div>
    </Link>
  );
}
