import { Logo } from '@assets/index';
import { Link } from 'react-router';

interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppBar(props: AppBarProps) {
  return (
    <div className={`flex h-14 w-[1919px] items-stretch px-2 ${props?.className}`}>
      <div className="flex w-[225px] items-center p-2">
        <div className="flex h-9 flex-1 items-center justify-center pr-1" />
        <Link to="/main">
          <button className="flex h-full w-[175px]">
            <Logo />
          </button>
        </Link>
      </div>
      {/* <div className='pl-24 flex items-center'>
        <div className='w-[628px] h-10 px-4 py-2 rounded-[20px] bg-[#e9e9e9] flex'>
          <input className='w-full h-full bg-transparent outline-none' />
          <Icon icon='search' className='w-6 h-6' />
        </div>
      </div> */}
    </div>
  );
}
