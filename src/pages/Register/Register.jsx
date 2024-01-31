import { registerThunk } from 'myRedux/auth/operations';
import { useDispatch } from 'react-redux';

import {
  ButtonRegister,
  Container,
  Form,
  Label,
  ParRegister,
  PicBox,
  PictureRegister,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    dispatch(
      registerThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Container>
      <ParRegister>Sign Up</ParRegister>

      <Form onSubmit={onSubmit}>
        <Label>
          Name&nbsp; <input type="text" name="name" autoComplete="username" />
        </Label>
        <Label>
          Email&nbsp;
          <input type="email" name="email" autoComplete="user-email" />
        </Label>
        <Label>
          Password&nbsp;
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </Label>
        <ButtonRegister type="submit">Sign Up</ButtonRegister>
      </Form>
      <hr />
      <PicBox>
        <PictureRegister
          src="https://www.shutterstock.com/image-photo/open-book-on-table-close-260nw-2282764379.jpg"
          alt="Pitcure of the Phonebook when you login"
        />
      </PicBox>
    </Container>
  );
};

export default Register;
