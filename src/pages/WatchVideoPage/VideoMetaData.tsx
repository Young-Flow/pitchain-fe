import ExtraActionPanel from './ExtraActionPanel';
import { Link } from 'react-router';
import { ArrowRight } from '@assets/icons';
interface VideoInfoPanelProps {
  avatar: string;
  title: string;
  channel: string;
  views: number;
  bmId: number;
}

export default function VideoMetaData({ avatar, title, channel, views, bmId }: VideoInfoPanelProps) {
  return (
    <div className="flex w-[1162px] py-2">
      <div className="flex w-[136px] items-center justify-center">
        <img src={avatar} className="h-[72px] object-contain" alt="로고" />
      </div>
      <div className="flex h-[72px] flex-1 flex-col items-stretch justify-between py-1 pl-3">
        <div className="font-Paperlogy text-base font-semibold text-stone-900">{title}</div>
        <div className="text-sm text-stone-500">{channel}</div>
        <div className="text-sm text-stone-500">{views}회</div>
      </div>
      <ExtraActionPanel>
        {bmId && (
          <Link to={`/details/${bmId}`}>
            <button
              id="to-details-button"
              className="bg-primary flex items-center gap-2 rounded-[8px] px-[16px] py-[14px] hover:bg-[#c7ebcd]"
            >
              <div className="font-Paperlogy font-semibold">상세 보기</div>
              <ArrowRight className="fill-black" />
            </button>
          </Link>
        )}
      </ExtraActionPanel>
    </div>
  );
}
