import { useLocation } from 'react-router';

export default function SocialCallback() {
  const router = useLocation();

  console.log(router.pathname);

  return <>a</>;
}
