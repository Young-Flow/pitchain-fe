import { AuthMutation } from '@apis/repository/auth.mutation';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const useSignMutator = () => {
  const authMutation = new AuthMutation();
  const navigate = useNavigate();
  const { mutate: signInMutate } = useMutation(authMutation.postSignIn(navigate));
  const { mutate: signUpMutate } = useMutation(authMutation.postSignUp(navigate));

  return { signInMutate, signUpMutate };
};
