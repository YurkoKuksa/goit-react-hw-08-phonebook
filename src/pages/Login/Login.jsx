import { userLoginThunk } from 'myRedux/auth/operations';

import { useDispatch } from 'react-redux';

import {
  Asking,
  ButtonLogin,
  ClickHere,
  Container,
  Label,
  ParLogin,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(
      userLoginThunk({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Container>
      <ParLogin>Login</ParLogin>

      <form onSubmit={onSubmit}>
        <Label>
          Email <input type="email" name="email" />
        </Label>
        <Label>
          Password <input type="password" name="password" />
        </Label>

        <ButtonLogin type="submit">Login</ButtonLogin>
      </form>

      <Asking>Haven't signed up yet? </Asking>

      <ClickHere to="/register">Click here</ClickHere>
    </Container>
  );
};

export default Login;
