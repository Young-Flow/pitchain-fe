import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

export default function Icon({ type, size }: { type: 'google' | 'kakao' | 'naver' } & { size?: number }) {
  switch (type) {
    case 'google':
      return <FcGoogle size={size} />;
    case 'kakao':
      return <RiKakaoTalkFill size={size} />;
    case 'naver':
      return <SiNaver size={size} />;
    default:
      return null;
  }
}
