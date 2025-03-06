import Clickable from '@components/Clickable/Clickable';
import Icon from '@components/Icon';
import { Link } from 'react-router';
import { For } from 'utilinent';

export default function SocialLogin() {
  return (
    <div className="flex flex-col gap-4">
      <For each={SOCIAL_LOGIN_ARRAY}>
        {({ type, text, url }) => (
          <Clickable
            shape="square"
            color={type}
            className="flex justify-between after:w-24 after:content-['']"
            Component={Link}
            to={url}
          >
            <Icon type={type} size={24} />
            {text}
          </Clickable>
        )}
      </For>
    </div>
  );
}

const SOCIAL_LOGIN_ARRAY = [
  {
    type: 'google' as const,
    text: '구글로 로그인',
    url: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20email%20profile',
  },
  {
    type: 'kakao' as const,
    text: '카카오로 로그인',
    url: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=891063e7c569324189a0353dfb18c534&redirect_uri=http://localhost:5173/sign/kakao/callback',
  },
  {
    type: 'naver' as const,
    text: '네이버로 로그인',
    url: 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=T4z00JRW0P38KpqrIc6w&redirect_uri=http://localhost:5173/sign/naver/callback',
  },
];
