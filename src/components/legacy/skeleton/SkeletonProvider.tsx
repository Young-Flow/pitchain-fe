import { ReactNode } from 'react';

interface SkeletonProviderProps {
  skeleton: ReactNode;
  isLoading?: boolean;
  children: ReactNode;
}

export default function SkeletonProvider({ skeleton, isLoading = false, children }: SkeletonProviderProps) {
  return <>{isLoading ? skeleton : children}</>;
}
