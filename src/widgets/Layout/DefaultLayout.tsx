import { Link, Outlet } from 'react-router';
import Logo from '@components/Logo';
import Clickable from '@components/Clickable/Clickable';
import AuthGuard from '@components/AuthGuard';
import { useAuthAdaptor } from '@hooks/useAdaptor/useAuthAdaptor';
import Avatar from '@components/Avatar';

export default function DefaultLayout() {
  return (
    <>
      <DefaultHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
}

function DefaultHeader() {
  const { profileImgURL } = useAuthAdaptor();

  return (
    <header className="flex w-full items-center justify-between px-48 py-8">
      <Logo className="h-40 w-140" />

      <div>
        <AuthGuard
          fallback={
            <Clickable shape="text" Component={Link} to={'/sign/socialLogin'}>
              로그인
            </Clickable>
          }
        >
          <Avatar size="large" src={profileImgURL} />
        </AuthGuard>
      </div>
    </header>
  );
}
