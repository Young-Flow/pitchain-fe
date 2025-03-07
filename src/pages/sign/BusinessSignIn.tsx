import Clickable from '@components/Clickable/Clickable';
import Form from '@components/Form';
import { BUSINESS_SIGN_ARRAY, SignValidate } from '@constants/Sign';
import { CreateForm } from 'sicilian';
import { For } from 'utilinent';

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
      <For each={BUSINESS_SIGN_ARRAY.slice(0, -1)}>
        {({ name, text, placeholder }) => (
          <div className="flex flex-col gap-4" key={name}>
            <Form.InputLabel htmlFor={name}>{text}</Form.InputLabel>
            <Form.InputWrapper>
              <Form.Input {...register({ name })} placeholder={placeholder} />
            </Form.InputWrapper>
            <Form.ErrorMessageIndicator errorMessage={getErrors(name) as string} />
          </div>
        )}
      </For>

      <Clickable shape="round" size="large" type="submit" className="bg-primary text-white">
        기업 회원 가입
      </Clickable>
    </Form>
  );
}
