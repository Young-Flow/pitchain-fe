import { paths } from 'src/types/apis';
import { Mutation } from '../Mutation';
import { toast } from 'react-hot-toast';
import { AuthToken } from '@utils/Token';

export class AuthMutation extends Mutation {
  postSocialLogin = (navigate: (path: string) => void) =>
    this.mutationOptions<
      paths['/oauth2/login']['post']['responses']['200']['content']['*/*']['data'],
      paths['/oauth2/login']['post']['requestBody']['content']['application/json']
    >({
      mutationFn: (data) => this.mutationFn('/oauth2/login', 'post', data),
      onSuccess: (data) => {
        AuthToken.setToken(data);
        toast.success('로그인 성공');
        navigate('/');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  postSignIn = (navigate: (path: string) => void) =>
    this.mutationOptions<
      paths['/companies/login']['post']['responses']['200']['content']['*/*']['data'],
      paths['/companies/login']['post']['requestBody']['content']['application/json']
    >({
      mutationFn: (data) => this.mutationFn('/companies/login', 'post', data),
      onSuccess: (data) => {
        AuthToken.setToken(data);
        toast.success('로그인 성공');
        navigate('/');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  postSignUp = (navigate: (path: string) => void) =>
    this.mutationOptions<
      paths['/companies']['post']['responses']['200']['content']['*/*']['data'],
      paths['/companies']['post']['requestBody']['content']['application/json']
    >({
      mutationFn: (data) => this.mutationFn('/companies', 'post', data),
      onSuccess: () => {
        toast.success('Pitchain 가입을 축하합니다');
        navigate('/sign/inBusiness');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
}
