import { Link, Outlet } from 'react-router';
import Logo from '../../components/Logo';
import Clickable from '../../components/Clickable/Clickable';

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
  return (
    <header className="flex items-center justify-between px-48 py-8">
      <Logo className="h-40 w-140" />

      <Clickable shape="text" Component={Link} to={'/signin'}>
        로그인
      </Clickable>
    </header>
  );
}
