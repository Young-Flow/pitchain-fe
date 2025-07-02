import { Outlet } from 'react-router';
import { AppBar } from './';

export default function MainLayout() {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex min-h-[1000px] w-[1920px] flex-col">
        <AppBar className="fixed z-[11]" />
        <Outlet />
      </div>
    </div>
  );
}
