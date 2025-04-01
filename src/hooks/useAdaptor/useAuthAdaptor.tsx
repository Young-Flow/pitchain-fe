import { AuthQuery } from '@apis/repository/auth.query';
import { useQuery } from '@tanstack/react-query';

export const useAuthAdaptor = () => {
  const authQuery = new AuthQuery();
  const { data } = useQuery(authQuery.getUser());

  return {
    isLogin: data?.email !== undefined,
    isCompany: data?.memberRole === 'COMPANY',
    profileImgURL: data?.profileImgURL ?? '',
    name: data?.name ?? '',
    email: data?.email ?? '',
    memberRole: data?.memberRole ?? 'INDIVIDUAL',
  };
};
