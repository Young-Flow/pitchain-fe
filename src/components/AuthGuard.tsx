import { AuthToken } from '@utils/Token';

export default function AuthGuard({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const { accessToken } = AuthToken.getToken();

  if (accessToken) {
    return <>{children}</>;
  } else {
    return <>{fallback}</>;
  }
}
