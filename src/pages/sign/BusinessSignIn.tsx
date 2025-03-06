import Clickable from '@components/Clickable/Clickable';
import Form from '@components/Form';
import { SignValidate } from '@constants/Sign';
import { CreateForm } from 'sicilian';

const { register, getErrors, handleSubmit } = new CreateForm({
  initValue: {
    email: '',
    password: '',
  },
  validator: SignValidate(),
  validateOn: ['blur'],
  clearFormOn: ['routeChange'],
});

export default function BusinessSignIn() {
  return (
    <Form className="flex flex-col gap-20" onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col gap-4">
        <Form.InputLabel htmlFor="email">이메일</Form.InputLabel>
        <Form.InputWrapper>
          <Form.Input {...register({ name: 'email' })} placeholder="이메일을 입력해주세요" />
        </Form.InputWrapper>
        <Form.ErrorMessageIndicator errorMessage={getErrors('email')} />
      </div>

      <div className="flex flex-col gap-4">
        <Form.InputLabel htmlFor="password">비밀번호</Form.InputLabel>
        <Form.InputWrapper>
          <Form.Input {...register({ name: 'password' })} placeholder="비밀번호를 입력해주세요" />
        </Form.InputWrapper>
        <Form.ErrorMessageIndicator errorMessage={getErrors('password')} />
      </div>

      <Clickable shape="round" size="large" type="submit" className="bg-primary text-white">
        기업 회원 가입
      </Clickable>
    </Form>
  );
}
