import { Link, Outlet, useLocation } from 'react-router';
import Logo from '@components/Logo';
import Clickable from '@components/Clickable/Clickable';

export default function SignLayout() {
  const { pathname } = useLocation();

  return (
    <main className="fixed top-1/2 left-1/2 flex w-424 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-36 p-12">
      <Logo className="h-110 w-340" />

      <div className="flex w-full flex-col gap-12">
        <Outlet />

        <div className="flex justify-center gap-8">
          <Clickable shape="text" Component={Link} to={NAV_LINK[pathname][0].to} className="flex-0 text-nowrap">
            {NAV_LINK[pathname][0].text}
          </Clickable>

          <div className="h-20 w-px bg-gray-400" />

          <Clickable shape="text" Component={Link} to={NAV_LINK[pathname][1].to} className="flex-0 text-nowrap">
            {NAV_LINK[pathname][1].text}
          </Clickable>
        </div>
      </div>
    </main>
  );
}

const SOCIAL_LOGIN_LINK = { text: '소셜 로그인', to: '/sign/socialLogin' };
const BUSINESS_SIGNIN_LINK = { text: '기업 로그인', to: '/sign/inBusiness' };
const BUSINESS_SIGNUP_LINK = { text: '기업 회원가입', to: '/sign/upBusiness' };

const NAV_LINK: { [key: string]: Array<{ text: string; to: string }> } = {
  '/sign/socialLogin': [BUSINESS_SIGNIN_LINK, BUSINESS_SIGNUP_LINK],
  '/sign/inBusiness': [SOCIAL_LOGIN_LINK, BUSINESS_SIGNUP_LINK],
  '/sign/upBusiness': [SOCIAL_LOGIN_LINK, BUSINESS_SIGNIN_LINK],
};
