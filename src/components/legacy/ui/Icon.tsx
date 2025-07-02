import bookmark from '@assets/icons/bookmark.svg';
import favorite from '@assets/icons/favorite.svg';
import share from '@assets/icons/share.svg';
import comment from '@assets/icons/comment.svg';
import grayComment from '@assets/icons/gray-comment.svg';
import search from '@assets/icons/search.svg';

type IconProps = {
  icon: 'bookmark' | 'favorite' | 'share' | 'comment' | 'grayComment' | 'search';
  className?: string;
};

const icons = {
  bookmark,
  favorite,
  share,
  comment,
  grayComment,
  search,
};

export default function Icon({ icon, className = '' }: IconProps) {
  const IconComponent = icons[icon];
  return <img src={IconComponent} alt={`${icon} icon`} className={`inline-block ${className}`} />;
}
