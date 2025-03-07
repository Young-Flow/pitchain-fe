import { paths } from 'src/types/apis';
import { Mutation } from '../Mutation';
import { toast } from 'react-hot-toast';

export class AuthMutation extends Mutation {
  postSocialLogin = () => this.mutationOptions({});

  postSignIn = (navigate: (path: string) => void) =>
    this.mutationOptions({
      mutationFn: (data: { email: string; password: string }) =>
        this.mutationFn<
          paths['/companies']['post']['responses']['200'],
          paths['/companies']['post']['requestBody']['content']['application/json']
        >('/companies/login', 'post', data),
      onSuccess: () => {
        toast.success('로그인 성공');
        navigate('/');
      },
      onError: (error) => {
        console.log(error);
      },
    });

  postSignUp = (navigate: (path: string) => void) =>
    this.mutationOptions({
      mutationFn: (data: { email: string; password: string; passwordConfirmation: string }) =>
        this.mutationFn('/companies', 'post', data),
      onSuccess: () => {
        toast.success('Pitchain 가입을 축하합니다');
        navigate('/sign/inBusiness');
      },
      onError: (error) => {
        console.log(error);
      },
    });
}
