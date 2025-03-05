import Form from '../../components/Form';

export function BasicInput() {
  return (
    <Form.InputWrapper>
      <Form.Input placeholder="email" />
    </Form.InputWrapper>
  );
}

export function InputTypeToggle() {
  return (
    <Form.InputWrapper>
      <Form.PasswordToggler>{(type) => <Form.Input type={type} placeholder="email" />}</Form.PasswordToggler>
    </Form.InputWrapper>
  );
}

export function InputWithLabel() {
  return (
    <>
      <Form.InputLabel htmlFor="email" required>
        email
      </Form.InputLabel>
      <Form.InputWrapper>
        <Form.Input placeholder="email" />
      </Form.InputWrapper>
    </>
  );
}
