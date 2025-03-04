import LogoImage from '../assets/images/logo.svg';
import { Link } from 'react-router';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`${className} block`}>
      <img src={LogoImage} draggable={false} className="h-full w-full object-contain select-none" alt="logo" />
    </Link>
  );
}
