import { useSignMutator } from '@hooks/useMutator/useSignMutator';
import { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router';

export default function SocialCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { provider } = useParams();
  const { socialLoginMutate } = useSignMutator();

  useEffect(() => {
    const oauthProvider = provider?.toUpperCase();

    if (oauthProvider === 'KAKAO' || oauthProvider === 'NAVER' || oauthProvider === 'GOOGLE') {
      socialLoginMutate({
        oauthProvider,
        code: code ?? '',
      });
    }
  }, []);

  return <></>;
}
