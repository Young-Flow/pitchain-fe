import { useLocation } from 'react-router';

export default function SocialCallback() {
  const { pathname, search } = useLocation();

  console.log(pathname, search);

  return <></>;
}
