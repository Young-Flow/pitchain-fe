export const SOCIAL_LOGIN_ARRAY = [
  {
    type: 'google' as const,
    text: '구글로 로그인',
    url: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20email%20profile',
  },
  {
    type: 'kakao' as const,
    text: '카카오로 로그인',
    url: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=891063e7c569324189a0353dfb18c534&redirect_uri=http://localhost:5173/sign/kakao/callback',
  },
  {
    type: 'naver' as const,
    text: '네이버로 로그인',
    url: 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=T4z00JRW0P38KpqrIc6w&redirect_uri=http://localhost:5173/sign/naver/callback',
  },
];

export const SignValidate = () => {
  const email = {
    required: { required: true, message: '이메일을 입력해주세요' },
    RegExp: {
      RegExp: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      message: '이메일 형식과 맞지 않습니다',
    },
  };

  const password = {
    required: { required: true, message: '비밀번호를 입력해주세요' },
    minLength: { number: 8, message: '비밀번호는 8자 이상이어야 합니다' },
    maxLength: { number: 16, message: '비밀번호는 16자 이하여야 합니다' },
    RegExp: [
      {
        RegExp: new RegExp('^[^\\s]+$'),
        message: '비밀번호는 공백을 포함할 수 없습니다.',
      },
      {
        RegExp: new RegExp('^(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[a-z\\d@$!%*?&]+$'),
        message: '비밀번호는 소문자, 숫자, 특수문자를 모두 포함해야 합니다',
      },
    ],
  };

  const passwordCheck = {
    ...password,
    custom: {
      checkFn: (value: string, store: { password: string }) => value === store.password,
      message: '비밀번호가 일치하지 않습니다',
    },
  };

  return { email, password, passwordCheck };
};
