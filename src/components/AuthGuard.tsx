import { useAuthAdaptor } from '@hooks/useAdaptor/useAuthAdaptor';

export default function AuthGuard({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const { isLogin } = useAuthAdaptor();

  if (isLogin) {
    return <>{children}</>;
  } else {
    return <>{fallback}</>;
  }
}
